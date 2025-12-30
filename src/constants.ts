
import { ServiceItem, GalleryImage, ContactInfo } from '@/types.ts';

export const SERVICES: ServiceItem[] = [
  // Обувь (Базовое)
  { 
    id: '1', 
    name: 'Замена набоек (полиуретан)', 
    description: 'Ставим крепко, шоб вы не цокали как лошадь по мостовой.',
    price: 'от 250 грн', 
    category: 'base' 
  },
  { 
    id: '2', 
    name: 'Профилактика подошвы', 
    description: 'Защитный слой Vibram — шоб ваши подошвы не таяли от одесского солнца.',
    price: 'от 300 грн', 
    category: 'base' 
  },
  { 
    id: '3', 
    name: 'Растяжка обуви', 
    description: 'Когда туфли жмут так, шо жизнь не мила. Сделаем комфорт!',
    price: '350 грн', 
    category: 'base' 
  },
  
  // Сумки и Аксессуары (Базовое/Реставрация)
  { 
    id: '11', 
    name: 'Укорачивание ремня', 
    description: 'Лишние сантиметры — это не наш фасон. Подгоним под талию.',
    price: '150 грн', 
    category: 'base' 
  },
  { 
    id: '12', 
    name: 'Замена ручек на сумке', 
    description: 'Новые ручки из натуральной кожи. Будет как из бутика на Дерибасовской.',
    price: 'от 450 грн', 
    category: 'restore' 
  },
  { 
    id: '13', 
    name: 'Ремонт фурнитуры', 
    description: 'Замки, карабины и заклепки. Чиним всё, шо перестало закрываться.',
    price: 'от 200 грн', 
    category: 'base' 
  },
  { 
    id: '14', 
    name: 'Покраска сумки', 
    description: 'Полный перекрас или обновление цвета. Ваша сумка скажет вам спасибо.',
    price: 'от 1200 грн', 
    category: 'premium' 
  },
  
  // Одежда и чистка (Настоящая магия)
  { 
    id: '6', 
    name: 'Покраска кожаных изделий', 
    description: 'Куртки, пиджаки, жилеты. Вернем цвет так, шо родная мама не узнает.',
    price: 'от 2500 грн', 
    category: 'restore' 
  },
  { 
    id: '5', 
    name: 'Полная химчистка', 
    description: 'Вымываем пыль дорог из ваших любимых кроссовок и кед.',
    price: 'от 600 грн', 
    category: 'restore' 
  },
  { 
    id: '9', 
    name: 'Реставрация углов сумки', 
    description: 'Убираем потертости и царапины. Ювелирная работа!',
    price: 'от 500 грн', 
    category: 'restore' 
  },
  
  // Премиум (Люкс)
  { 
    id: '10', 
    name: 'Премиум уход Saphir', 
    description: 'Деликатное питание кожи французскими бальзамами. Только люкс.',
    price: 'от 700 грн', 
    category: 'premium' 
  },
  { 
    id: '15', 
    name: 'Перекрас в другой цвет', 
    description: 'Был черный — стал бордовый. Меняем имидж по первому требованию.',
    price: 'от 1500 грн', 
    category: 'premium' 
  },
];

export const GALLERY: GalleryImage[] = [
  { 
    url: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800', 
    beforeUrl: 'https://images.unsplash.com/photo-1592080033282-38b4f0535316?auto=format&fit=crop&q=80&w=800', 
    title: 'Реставрация кожи', 
    description: 'Полное восстановление цвета и структуры элитной кожи.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80&w=800', 
    title: 'Ремонт сумки Hermes', 
    description: 'Восстановление ручек и углов на дорогом аксессуаре.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', 
    beforeUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800', 
    title: 'Химчистка кроссовок', 
    description: 'Глубокая очистка подошвы и деликатных материалов верха.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800', 
    title: 'Уход за замшей', 
    description: 'Восстановление ворса и обработка водоотталкивающим средством.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1521446731725-344071350397?auto=format&fit=crop&q=80&w=800', 
    title: 'Ремонт кожаной куртки', 
    description: 'Замена молнии и покраска потертостей.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800', 
    title: 'Реставрация портфеля', 
    description: 'Таки вернули блеск деловому человеку!' 
  }
];

export const CONTACTS: ContactInfo = {
  address: 'Одесса, ул. Чудес, 15',
  phone: '+38 (111) 11-11-11',
  workHours: 'Пн-Пт: 09:00 - 19:00, Сб: 10:00 - 16:00',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2747.38245582379!2d30.736829176950155!3d46.48473797110825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63196f7c469b7%3A0x6b2e3c0b1f2e6b0a!2z0YPQuy4g0JTQtdGA0LjQsdCw0YHQvtCy0YHQutCw0Y8sIDE1LCDQntC00LXRgdGB0LAsINCe0LTQtdGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY1MDAw!5e0!3m2!1sru!2sua!4v1700000000000!5m2!1sru!2sua',
  instagram: '@step_repair_odessa'
};