import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CaregiversPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    careType: "",
    region: "",
    target: "",
    time: "",
    urgent: "",
    name: "",
    phone: "",
    detail: "",
  });

  const isValidPhone =
    /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/.test(
      formData.phone
    );

  const progress = (step / 7) * 100;

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* 제목 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            돌봄 인력 신청
          </h1>

          <p className="mt-2 text-muted-foreground">
            간단한 설문 후 맞춤형 돌봄 서비스를 신청할 수 있습니다.
          </p>
        </div>

        {/* 진행률 */}
        {step <= 6 && (
          <div className="mb-8">
            <div className="h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-green-500 rounded-full transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-sm text-gray-500">
              STEP {step} / 6
            </p>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              1/5 어떤 돌봄이 필요하신가요?
            </h2>

            <div className="grid gap-3">
              {[
                "아이 돌봄",
                "노인 돌봄",
                "교육 돌봄",
                "생활 케어",
              ].map((item) => (
                <Button
                  key={item}
                  variant={
                    formData.careType === item
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      careType: item,
                    })
                  }
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.careType}
                onClick={() => setStep(2)}
              >
                다음
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              2/5 어느 지역에서 이용하시나요?
            </h2>

            <div className="grid gap-3">
              {[
                "서울",
                "경기",
                "인천",
                "부산",
                "기타",
              ].map((item) => (
                <Button
                  key={item}
                  variant={
                    formData.region === item
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      region: item,
                    })
                  }
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.region}
                onClick={() => setStep(3)}
              >
                다음
              </Button>
            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              3/5 돌봄 대상은 누구인가요?
            </h2>

            <div className="grid gap-3">
              {[
                "영유아",
                "초등학생",
                "성인",
                "노인",
              ].map((item) => (
                <Button
                  key={item}
                  variant={
                    formData.target === item
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      target: item,
                    })
                  }
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.target}
                onClick={() => setStep(4)}
              >
                다음
              </Button>
            </div>

          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              4/5 희망 시간대를 선택해주세요
            </h2>

            <div className="grid gap-3">
              {[
                "오전",
                "오후",
                "저녁",
                "상관없음",
              ].map((item) => (
                <Button
                  key={item}
                  variant={
                    formData.time === item
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      time: item,
                    })
                  }
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.time}
                onClick={() => setStep(5)}
              >
                다음
              </Button>
            </div>

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">
              5/5 얼마나 급하신가요?
            </h2>

            <div className="grid gap-3">
              {[
                "오늘 필요",
                "3일 이내",
                "1주일 이내",
                "여유 있음",
              ].map((item) => (
                <Button
                  key={item}
                  variant={
                    formData.urgent === item
                      ? "default"
                      : "outline"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      urgent: item,
                    })
                  }
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!formData.urgent}
                onClick={() => setStep(6)}
              >
                신청서 작성하기
              </Button>
            </div>

          </div>
        )}

        {/* STEP 6 신청서 */}
        {step === 6 && (
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

              <div className="space-y-3">

                {(!formData.name ||
                  !formData.phone ||
                  !formData.detail) && (
                    <p className="text-red-500 text-sm">
                      이름, 연락처, 요청사항을 모두 입력해주세요.
                    </p>
                  )}

                {formData.phone &&
                  !isValidPhone && (
                    <p className="text-red-500 text-sm">
                      올바른 전화번호를 입력해주세요.
                    </p>
                  )}

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={
                    !formData.name ||
                    !isValidPhone ||
                    !formData.detail
                  }
                  onClick={() => {
                    setStep(7);
                  }}
                >
                  신청하기
                </Button>

              </div>

            </div>
          </div>
        )}

        {/* STEP 7 완료 */}
        {step === 7 && (
          <div className="bg-white border rounded-2xl p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              신청 완료
            </h2>

            <p className="text-muted-foreground mb-6">
              신청이 정상적으로 접수되었습니다.
            </p>

            <div className="text-left max-w-md mx-auto space-y-2">

              <p>
                <strong>돌봄 유형:</strong> {formData.careType}
              </p>

              <p>
                <strong>지역:</strong> {formData.region}
              </p>

              <p>
                <strong>대상:</strong> {formData.target}
              </p>

              <p>
                <strong>시간대:</strong> {formData.time}
              </p>

              <p>
                <strong>긴급도:</strong> {formData.urgent}
              </p>

              <p>
                <strong>이름:</strong> {formData.name}
              </p>

              <p>
                <strong>연락처:</strong> {formData.phone}
              </p>

            </div>

            <Button
              className="mt-8"
              onClick={() => {
                setStep(1);

                setFormData({
                  careType: "",
                  region: "",
                  target: "",
                  time: "",
                  urgent: "",
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