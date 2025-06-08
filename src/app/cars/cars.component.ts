import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-cars",
  imports: [ReactiveFormsModule],
  templateUrl: "./cars.component.html",
  styleUrl: "./cars.component.css",
})
export class CarsComponent {
  cars: any = [];
  baseCars = [
    {
      image: "https://testologia.ru/cars-images/1.png",
      title: "BMW M4 Competition",
      text: "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
      prices: [1450, 1300, 1100],
    },
    {
      image: "https://testologia.ru/cars-images/2.png",
      title: "Audi R8 V10",
      text: "Суперкар с мощным двигателем V10. Audi R8 — это сочетание производительности и элегантности.",
      prices: [2000, 1800, 1600],
    },
    {
      image: "https://testologia.ru/cars-images/3.png",
      title: "Lamborghini Huracan",
      text: "Легендарный суперкар с мощностью 610 л.с. Lamborghini Huracan — это мечта каждого автолюбителя.",
      prices: [3000, 2800, 2500],
    },
    {
      image: "https://testologia.ru/cars-images/4.png",
      title: "Ferrari F8 Spider",
      text: "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
      prices: [3500, 3200, 2900],
    },
    {
      image: "https://testologia.ru/cars-images/5.png",
      title: "Porsche 911 Targa 4S Yellow",
      text: "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa.",
      prices: [1800, 1650, 1450],
    },
    {
      image: "https://testologia.ru/cars-images/6.png",
      title: "Mercedes SL 55 AMG",
      text: "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
      prices: [1700, 1550, 1350],
    },
    {
      image: "https://testologia.ru/cars-images/7.png",
      title: "BMW Z4",
      text: "Компактный кабриолет для стильных путешествий. BMW Z4 — идеальный союз маневренности, мощности и элегантного дизайна.",
      prices: [1200, 1100, 950],
    },
    {
      image: "https://testologia.ru/cars-images/8.png",
      title: "Mercedes C180 Convertible",
      text: "Идеальный выбор для солнечного дня. Mercedes C180 Convertible — кабриолет для легкого и комфортного вождения.",
      prices: [1000, 900, 800],
    },
    {
      image: "https://testologia.ru/cars-images/9.png",
      title: "Chevrolet Corvette Orange",
      text: "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете — это стиль и производительность в одном флаконе.",
      prices: [1400, 1250, 1100],
    },
    {
      image: "https://testologia.ru/cars-images/10.png",
      title: "Tesla Model S",
      text: "Электрический седан с невероятной производительностью и дальностью хода до 600 км на одной зарядке.",
      prices: [1600, 1500, 1300],
    },
    {
      image: "https://testologia.ru/cars-images/11.png",
      title: "Ford Mustang GT",
      text: "Культовый американский мускул-кар с мощным V8 двигателем и агрессивным дизайном.",
      prices: [1400, 1250, 1100],
    },
    {
      image: "https://testologia.ru/cars-images/12.png",
      title: "Jaguar F-Type Coupe",
      text: "Спортивное купе с элегантным дизайном и мощным двигателем для истинных ценителей скорости.",
      prices: [2200, 2000, 1800],
    },
  ];

  carsFilter = [
    {
      active: true,
      name: "Все марки",
    },
    {
      active: false,
      name: "Lamborghini",
    },
    {
      active: false,
      name: "Ferrari",
    },
    {
      active: false,
      name: "Porsche",
    },
    {
      active: false,
      name: "BMW",
    },
    {
      active: false,
      name: "Mercedes",
    },
    {
      active: false,
      name: "Chevrolet",
    },
    {
      active: false,
      name: "Audi",
    },
    {
      active: false,
      name: "Ford",
    },
  ];

  orderForm = new FormGroup({
    car: new FormControl(""),
    name: new FormControl(""),
    phone: new FormControl(""),
  });

  ngOnInit() {
    this.cars = this.baseCars;
  }

  changeFilter(filter: any, carsContent: HTMLElement) {
    this.carsFilter.forEach((el) => (el.active = false));
    filter.active = true;

    const filterText = filter.name.toLowerCase();

    if (filterText === "все марки") {
      this.cars = this.baseCars;
    } else {
      this.cars = this.baseCars.filter((item) =>
        item.title.toLowerCase().includes(filterText)
      );
    }

    carsContent.scrollIntoView({ behavior: "instant" });
  }

  isError(fieldName: string) {
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  sendOrder() {
    if (this.orderForm.valid) {
      alert("Спасибо за заявку! Мы скоро свяжемся с вами");
      this.orderForm.reset();
    }
  }
}
