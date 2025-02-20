"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { Check, ChevronRight, User, BookOpen, CheckCircle } from "lucide-react";

interface Profile {
  id: string;
  name: string;
  type: string;
}

interface EnrollmentModalProps {
  open?: boolean;
  onClose?: () => void;
  onComplete?: (data: any) => void;
  courseTitle?: string;
  profiles?: Profile[];
}

const EnrollmentModal = ({
  open = true,
  onClose = () => console.log("close"),
  onComplete = (data) => console.log("complete", data),
  courseTitle = "Introduction to React Development",
  profiles = [
    { id: "1", name: "Student Profile", type: "student" },
    { id: "2", name: "Professional Profile", type: "professional" },
  ],
}: EnrollmentModalProps) => {
  const [step, setStep] = React.useState(1);
  const [selectedProfile, setSelectedProfile] = React.useState<string>("");

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({ profileId: selectedProfile });
      onClose();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select Profile</h3>
            <RadioGroup
              value={selectedProfile}
              onValueChange={setSelectedProfile}
              className="space-y-3"
            >
              {profiles.map((profile) => (
                <Card
                  key={profile.id}
                  className={`p-4 cursor-pointer transition-all ${selectedProfile === profile.id ? "border-primary" : ""}`}
                >
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value={profile.id} id={profile.id} />
                    <Label
                      htmlFor={profile.id}
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{profile.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {profile.type}
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </Card>
              ))}
            </RadioGroup>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Course Details</h3>
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <div>
                  <div className="font-medium">{courseTitle}</div>
                  <div className="text-sm text-muted-foreground">
                    8 weeks • 3 credit hours
                  </div>
                </div>
              </div>
            </Card>
            <div className="space-y-2">
              <div className="text-sm font-medium">Course Progress</div>
              <Progress value={0} className="h-2" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-lg font-medium">Confirm Enrollment</h3>
            <p className="text-muted-foreground">
              You're about to enroll in {courseTitle}. Please confirm your
              enrollment to proceed.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Course Enrollment</DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {step > stepNumber ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="py-4">{renderStep()}</div>

        <div className="flex justify-end space-x-2 mt-6">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={step === 1 && !selectedProfile}
          >
            {step === 3 ? "Confirm Enrollment" : "Continue"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;
