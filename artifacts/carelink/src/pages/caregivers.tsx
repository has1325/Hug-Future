import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CaregiversPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    careType: "",
    region: "",
    name: "",
    phone: "",
    detail: "",
  });

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* 제목 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            돌봄 인력 신청
          </h1>

          <p className="mt-2 text-muted-foreground">
            간단한 설문 후 돌봄 서비스를 신청할 수 있습니다.
          </p>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="bg-white border rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-6">
              서비스 설문
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block mb-2">
                  어떤 돌봄이 필요하신가요?
                </label>

                <Select
                  value={formData.careType}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      careType: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="child">
                      아이 돌봄
                    </SelectItem>

                    <SelectItem value="elderly">
                      노인 돌봄
                    </SelectItem>

                    <SelectItem value="education">
                      교육 돌봄
                    </SelectItem>

                    <SelectItem value="living">
                      생활 케어
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2">
                  지역
                </label>

                <input
                  className="w-full border rounded-lg p-3"
                  placeholder="예) 서울 강남구"
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      region: e.target.value,
                    })
                  }
                />
              </div>

              <Button
                className="w-full"
                onClick={() => setStep(2)}
              >
                다음 단계
              </Button>

            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="bg-white border rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-6">
              신청서 작성
            </h2>

            <div className="space-y-4">

              <input
                className="w-full border rounded-lg p-3"
                placeholder="이름"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="전화번호"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />

              <textarea
                rows={5}
                className="w-full border rounded-lg p-3"
                placeholder="원하시는 돌봄 내용을 작성해주세요"
                value={formData.detail}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    detail: e.target.value,
                  })
                }
              />

              <div className="flex gap-3">

                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  이전
                </Button>

                <Button
                  className="flex-1"
                  onClick={() => {
                    console.log(formData);

                    // 나중에 여기서 DB 저장
                    setStep(3);
                  }}
                >
                  신청하기
                </Button>

              </div>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="bg-white border rounded-2xl p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              신청 완료
            </h2>

            <p className="text-muted-foreground mb-6">
              신청이 정상적으로 접수되었습니다.
            </p>

            <div className="space-y-2 text-left max-w-md mx-auto">

              <div>
                <strong>돌봄 유형:</strong>{" "}
                {formData.careType}
              </div>

              <div>
                <strong>지역:</strong>{" "}
                {formData.region}
              </div>

              <div>
                <strong>이름:</strong>{" "}
                {formData.name}
              </div>

              <div>
                <strong>전화번호:</strong>{" "}
                {formData.phone}
              </div>

            </div>

            <Button
              className="mt-8"
              onClick={() => {
                setStep(1);

                setFormData({
                  careType: "",
                  region: "",
                  name: "",
                  phone: "",
                  detail: "",
                });
              }}
            >
              새 신청하기
            </Button>

          </div>
        )}
      </div>
    </div>
  );
}