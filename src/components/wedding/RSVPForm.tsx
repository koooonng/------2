
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export type Attendance = "yes" | "no" | null;

export type RSVPFormData = {
  name: string;
  email: string;
  attendance: Attendance;
  message: string;
};

type RSVPFormProps = {
  deadline: string;
};

const RSVPForm = ({ deadline }: RSVPFormProps) => {
  const { toast } = useToast();
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [message, setMessage] = useState("");

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestName || !guestEmail || attendance === null) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля.",
      });
      return;
    }
    
    toast({
      title: "Спасибо за ответ!",
      description: `Мы получили ваш ${attendance === "yes" ? "положительный" : "отрицательный"} ответ.`,
    });
    
    // Здесь в реальном приложении был бы код для отправки данных на сервер
    
    // Сброс формы
    setGuestName("");
    setGuestEmail("");
    setAttendance(null);
    setMessage("");
  };

  return (
    <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#1A1F2C]">Подтвердите ваше присутствие</CardTitle>
        <CardDescription>Пожалуйста, дайте нам знать до {deadline}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRSVP} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Ваше имя и фамилия *
            </label>
            <Input 
              id="name" 
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Иван Иванов"
              required
              className="border-[#d6bcfa] focus-visible:ring-[#9b87f5]"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Ваш email *
            </label>
            <Input 
              id="email" 
              type="email"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="ivan@example.com"
              required
              className="border-[#d6bcfa] focus-visible:ring-[#9b87f5]"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Сможете ли вы присутствовать? *</p>
            <div className="flex space-x-4">
              <Button 
                type="button"
                variant={attendance === "yes" ? "default" : "outline"}
                onClick={() => setAttendance("yes")}
                className={attendance === "yes" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "border-[#d6bcfa]"}
              >
                С радостью приду
              </Button>
              <Button 
                type="button"
                variant={attendance === "no" ? "default" : "outline"}
                onClick={() => setAttendance("no")}
                className={attendance === "no" ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : "border-[#d6bcfa]"}
              >
                К сожалению, не смогу
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Сообщение для нас (необязательно)
            </label>
            <Textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Особые пожелания, вопросы..."
              className="border-[#d6bcfa] focus-visible:ring-[#9b87f5]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            Отправить ответ
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;
