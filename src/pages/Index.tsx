import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [cart, setCart] = useState<number[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Базовая футболка', price: 1490, category: 'Одежда', image: 'https://cdn.poehali.dev/projects/7a496644-9924-4fde-a35f-d4c474eaf0be/files/bbb30908-4d35-4cd0-b011-e500d95509b6.jpg', rating: 5 },
    { id: 2, name: 'Джинсы Slim Fit', price: 3990, category: 'Одежда', image: 'https://cdn.poehali.dev/projects/7a496644-9924-4fde-a35f-d4c474eaf0be/files/783b0abe-7b73-4018-b264-58007f28d0b9.jpg', rating: 5 },
    { id: 3, name: 'Худи с капюшоном', price: 2990, category: 'Одежда', image: 'https://cdn.poehali.dev/projects/7a496644-9924-4fde-a35f-d4c474eaf0be/files/efd10153-3bc4-4e77-aefd-90be499d9acb.jpg', rating: 4 },
    { id: 4, name: 'Рубашка оверсайз', price: 2490, category: 'Одежда', image: '/placeholder.svg', rating: 5 },
    { id: 5, name: 'Спортивные брюки', price: 2190, category: 'Одежда', image: '/placeholder.svg', rating: 4 },
    { id: 6, name: 'Куртка-бомбер', price: 4990, category: 'Верхняя одежда', image: '/placeholder.svg', rating: 5 },
  ];

  const reviews: Review[] = [
    { id: 1, name: 'Анна В.', rating: 5, text: 'Обожаю этот магазин! Вещи отличного качества, сидят идеально. Буду заказывать ещё!', date: '15 октября 2024' },
    { id: 2, name: 'Михаил К.', rating: 5, text: 'Заказал худи и футболки — всё пришло быстро, качество на высоте. Цены приятные!', date: '10 октября 2024' },
    { id: 3, name: 'Екатерина Л.', rating: 4, text: 'Хороший выбор базовых вещей. Джинсы села как влитые, доставка 2 дня.', date: '5 октября 2024' },
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shirt" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">CazualShop</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-primary transition-colors">Блог</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={22} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Стильная повседневная одежда для каждого
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественный casual для вашего гардероба. Комфорт и стиль по доступным ценам с доставкой по всей России.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные модели</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Хиты сезона — самые любимые вещи наших покупателей
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < product.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.rating}.0)</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" onClick={() => addToCart(product.id)}>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">О нашем магазине</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  CazualShop — современный магазин повседневной одежды, где комфорт встречается со стилем.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы отбираем качественные базовые вещи и трендовые модели, чтобы ваш гардероб был стильным и универсальным. 
                  Наша команда следит за актуальными тенденциями и всегда готова помочь с выбором.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Моделей одежды</div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="О нас" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground">Все для вашего удобства и комфорта</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Truck" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                  <p className="text-muted-foreground">
                    Доставим ваш заказ в течение 1-3 дней по всей России. Бесплатная доставка при заказе от 2500 ₽.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
                  <p className="text-muted-foreground">
                    Работаем только с проверенными поставщиками. Обмен и возврат в течение 30 дней.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Headphones" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">
                    Наша служба поддержки всегда на связи. Ответим на любые вопросы в течение 15 минут.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">Ответы на популярные вопросы наших клиентов</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Как оформить заказ?</AccordionTrigger>
                <AccordionContent>
                  Выберите нужные товары, добавьте их в корзину и перейдите к оформлению. Укажите адрес доставки и способ оплаты. Мы свяжемся с вами для подтверждения заказа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Какие способы оплаты доступны?</AccordionTrigger>
                <AccordionContent>
                  Мы принимаем оплату банковскими картами, наличными при получении, электронными деньгами и через системы быстрых платежей.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Сколько стоит доставка?</AccordionTrigger>
                <AccordionContent>
                  Стоимость доставки зависит от региона и составляет от 300 до 800 рублей. При заказе от 2500 рублей доставка бесплатная.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Можно ли вернуть товар?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете вернуть или обменять товар в течение 30 дней с момента получения, если он не был в употреблении и сохранены бирки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Как отследить мой заказ?</AccordionTrigger>
                <AccordionContent>
                  После отправки заказа вы получите трек-номер на email. С его помощью можно отслеживать посылку на сайте службы доставки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="blog" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Блог</h2>
              <p className="text-lg text-muted-foreground">Полезные статьи и новости</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted">
                    <img src="/placeholder.svg" alt="Статья 1" className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Тренды</Badge>
                  <h3 className="text-xl font-semibold mb-2">Базовый гардероб 2024</h3>
                  <p className="text-muted-foreground mb-4">Разбираем must-have вещи для создания стильных повседневных образов...</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    20 октября 2024
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted">
                    <img src="/placeholder.svg" alt="Статья 2" className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Гайды</Badge>
                  <h3 className="text-xl font-semibold mb-2">Как выбрать идеальные джинсы</h3>
                  <p className="text-muted-foreground mb-4">Полное руководство по выбору джинсов: типы кроя, посадка, длина и уход за денимом...</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    15 октября 2024
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted">
                    <img src="/placeholder.svg" alt="Статья 3" className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Стиль</Badge>
                  <h3 className="text-xl font-semibold mb-2">Оверсайз: как носить правильно</h3>
                  <p className="text-muted-foreground mb-4">Гид по оверсайз-стилю: как создать модный образ и не выглядеть мешковато...</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    10 октября 2024
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
              <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={18} 
                          className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{review.text}</p>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shirt" size={28} className="text-primary" />
                <span className="text-xl font-bold">CazualShop</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Стильная повседневная одежда с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Одежда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Верхняя одежда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Распродажа</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cazualshop.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-secondary-foreground/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <div>© 2024 CazualShop. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;