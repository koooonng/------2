
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const WeddingInvitation = () => {
  const { toast } = useToast();
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
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
    <div className="flex flex-col min-h-screen bg-[#f8f4f1]">
      {/* Верхняя декоративная полоса */}
      <div className="h-6 bg-gradient-to-r from-[#d6bcfa] via-[#9b87f5] to-[#d6bcfa]"></div>
      
      {/* Основной контент */}
      <div className="container max-w-4xl mx-auto px-4 py-8 flex-1">
        {/* Заголовок и дата */}
        <div className="text-center mb-16 mt-8 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl text-[#6E59A5] mb-4">Александр и Екатерина</h1>
          <p className="text-xl text-[#8E9196] italic">приглашают вас на свадьбу</p>
          <div className="mt-8 flex items-center justify-center">
            <Separator className="w-24 bg-[#d6bcfa]" />
            <span className="mx-4 text-2xl text-[#7E69AB]">19.08.2025</span>
            <Separator className="w-24 bg-[#d6bcfa]" />
          </div>
        </div>
        
        {/* Информация о мероприятии */}
        <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md hover-scale transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#1A1F2C]">Детали торжества</CardTitle>
            <CardDescription>Мы будем счастливы видеть вас на нашем празднике</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4 text-[#9b87f5]">
                <Icon name="CalendarHeart" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Дата</h3>
                <p>19 августа 2025 года, суббота</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-[#9b87f5]">
                <Icon name="Clock" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Время</h3>
                <p>Сбор гостей в 15:00</p>
                <p>Начало церемонии в 16:00</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-[#9b87f5]">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Место проведения</h3>
                <p>Ресторан "Лазурный берег"</p>
                <p>ул. Приморская, 15, Санкт-Петербург</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-[#9b87f5]">
                <Icon name="Utensils" size={24} />
              </div>
              <div>
                <h3 className="font-medium">Дресс-код</h3>
                <p>Коктейльные платья для дам, костюмы для мужчин</p>
                <p>Приветствуются оттенки лавандового и фиолетового</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Наша история */}
        <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#1A1F2C]">Наша история</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48">
              <p className="text-[#8E9196] leading-relaxed mb-3">
                Мы познакомились пять лет назад на фестивале современного искусства. Александр нечаянно пролил кофе на платье Екатерины, и чтобы загладить вину, пригласил ее на ужин.
              </p>
              <p className="text-[#8E9196] leading-relaxed mb-3">
                С тех пор мы не расставались. Вместе мы путешествовали по Европе, завели кота по имени Байрон, и поняли, что хотим провести всю жизнь вместе.
              </p>
              <p className="text-[#8E9196] leading-relaxed">
                В день нашей четвертой годовщины, на закате на берегу Финского залива, Александр сделал предложение. И теперь мы хотим разделить наше счастье с вами!
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
        
        {/* RSVP форма */}
        <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#1A1F2C]">Подтвердите ваше присутствие</CardTitle>
            <CardDescription>Пожалуйста, дайте нам знать до 19 июля 2025</CardDescription>
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
        
        {/* Контакты */}
        <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#1A1F2C]">Свяжитесь с нами</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center gap-8">
            <div className="text-center">
              <h3 className="font-medium mb-2">Александр</h3>
              <p className="text-[#8E9196]">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-2">Екатерина</h3>
              <p className="text-[#8E9196]">+7 (999) 765-43-21</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-[#8E9196] text-sm">Пожалуйста, не стесняйтесь обращаться с любыми вопросами</p>
          </CardFooter>
        </Card>
      </div>
      
      {/* Подвал */}
      <footer className="text-center py-6 text-[#8E9196] text-sm">
        <p>С любовью, Александр и Екатерина</p>
        <p className="mt-2">© 2025</p>
      </footer>
    </div>
  );
};

export default WeddingInvitation;
