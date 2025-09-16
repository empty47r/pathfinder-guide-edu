import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { value: "science", label: "Conducting experiments and analyzing data", stream: "Science" },
      { value: "arts", label: "Creative writing, literature, and history", stream: "Arts" },
      { value: "business", label: "Managing projects and understanding economics", stream: "Commerce" },
      { value: "technical", label: "Working with technology and programming", stream: "Science" }
    ]
  },
  {
    id: 2,
    question: "Which subjects do you find most interesting?",
    options: [
      { value: "math-physics", label: "Mathematics and Physics", stream: "Science" },
      { value: "language-history", label: "Languages and History", stream: "Arts" },
      { value: "accounts-economics", label: "Accounts and Economics", stream: "Commerce" },
      { value: "computer-bio", label: "Computer Science and Biology", stream: "Science" }
    ]
  },
  {
    id: 3,
    question: "What kind of career appeals to you?",
    options: [
      { value: "research", label: "Research and Development", stream: "Science" },
      { value: "creative", label: "Teaching, Journalism, or Civil Services", stream: "Arts" },
      { value: "business-oriented", label: "Business Management or Finance", stream: "Commerce" },
      { value: "healthcare", label: "Medicine or Healthcare", stream: "Science" }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to solve problems?",
    options: [
      { value: "logical", label: "Using logical reasoning and formulas", stream: "Science" },
      { value: "creative-thinking", label: "Through creative thinking and analysis", stream: "Arts" },
      { value: "practical", label: "Finding practical and efficient solutions", stream: "Commerce" },
      { value: "collaborative", label: "Working with others and discussion", stream: "Arts" }
    ]
  },
  {
    id: 5,
    question: "What motivates you the most?",
    options: [
      { value: "discovery", label: "Making new discoveries and innovations", stream: "Science" },
      { value: "impact", label: "Making a positive impact on society", stream: "Arts" },
      { value: "success", label: "Achieving financial success and growth", stream: "Commerce" },
      { value: "helping", label: "Helping others and serving community", stream: "Arts" }
    ]
  }
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getRecommendedStream = () => {
    const streamCounts = { Science: 0, Arts: 0, Commerce: 0 };
    
    Object.values(answers).forEach(answer => {
      const question = questions.find(q => 
        q.options.some(opt => opt.value === answer)
      );
      const option = question?.options.find(opt => opt.value === answer);
      if (option) {
        streamCounts[option.stream as keyof typeof streamCounts]++;
      }
    });

    return Object.entries(streamCounts).reduce((a, b) => 
      streamCounts[a[0] as keyof typeof streamCounts] > streamCounts[b[0] as keyof typeof streamCounts] ? a : b
    )[0];
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendedStream = getRecommendedStream();
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Card className="card-gradient shadow-strong">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold">Your Assessment Results</CardTitle>
              <CardDescription>Based on your responses, here's what we recommend</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Recommended Stream: {recommendedStream}
                </h3>
                <p className="text-muted-foreground">
                  This stream aligns best with your interests and aptitude
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Why {recommendedStream}?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recommendedStream === "Science" && (
                      <p>Your analytical thinking and interest in logical problem-solving make Science an excellent choice. Consider Engineering, Medical, or Research careers.</p>
                    )}
                    {recommendedStream === "Arts" && (
                      <p>Your creative thinking and interest in social impact make Arts ideal. Consider Teaching, Civil Services, Journalism, or Psychology careers.</p>
                    )}
                    {recommendedStream === "Commerce" && (
                      <p>Your practical approach and business acumen make Commerce perfect. Consider CA, MBA, Banking, or Entrepreneurship careers.</p>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Explore {recommendedStream} courses in nearby colleges</li>
                      <li>• Check eligibility criteria and cut-offs</li>
                      <li>• Research career opportunities</li>
                      <li>• Plan your application timeline</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="hero" 
                  onClick={() => navigate("/career-paths")}
                  className="flex items-center gap-2"
                >
                  Explore Career Paths
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/colleges")}
                  className="flex items-center gap-2"
                >
                  Find Colleges
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <Card className="shadow-strong">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Aptitude Assessment</CardTitle>
                <CardDescription>
                  Question {currentQuestion + 1} of {questions.length}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{Math.round(progress)}%</div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
            </div>
            <Progress value={progress} className="mt-4" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup 
                value={answers[questions[currentQuestion].id] || ""} 
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button 
                variant="hero"
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className="flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;