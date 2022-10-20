const donators = [
  {
    name: 'Michael',
    lastName: 'Flores',
    email: 'michaelflores@gmail.com',
    password: 'michael1?',
  },
  {
    name: 'Maylen',
    lastName: 'Valdez',
    email: 'maylenvaldez@gmail.com',
    password: 'maylen1?',
  },
  {
    name: 'Lucia',
    lastName: 'Sebe',
    email: 'luciasebe@gmail.com',
    password: 'lucia1?',
  },
  {
    name: 'Nachito',
    lastName: 'Ibarra',
    email: 'nachoibarra@gmail.com',
    password: 'nachito1?',
  },
  {
    name: 'Emir',
    lastName: 'Romero',
    email: 'emirromero@gmail.com',
    password: 'emir1?',
  },
]

const centers = [
  {
    name: 'Chakarita fubol clu',
    email: 'chakarita@center.com',
    password: 'chakarita1?',
    phone: '234567764565',
    street: 'Av 18 de julio',
    numberDoor: '1232',
    description:
      'Somos un centro deportivo y a su vez, busca poder llegarle alimentos a personas necesitadas',
    zone: 'Centro',
    departament: 'Montevideo',
    numberVolunteersRequired: 10,
    foods: [
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Arroz',
      },
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Fideo',
      },
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Pulpa de tomate',
      },
    ],
  },
  {
    name: 'ANIMA',
    email: 'anima@center.com',
    password: 'anima1?',
    phone: '345634',
    street: 'Canelones',
    numberDoor: '3535',
    description:
      'Instituto educativo con las orientaciones ADM y TIC con inserción en el mundo laboral a nuestros estudiantes',
    zone: 'Centro',
    departament: 'Montevideo',
    numberVolunteersRequired: 12,
    foods: [
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Arroz',
      },
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Pulpa de tomate',
      },
    ],
  },
  {
    name: 'Manos juntas',
    email: 'manosjuntas@center.com',
    password: 'manosjuntas1?',
    phone: '1232',
    street: 'Av Italia',
    numberDoor: '53654',
    description: 'Centro colaborativo fundado por vecinos del barrio',
    zone: 'Cordon',
    departament: 'Montevideo',
    numberVolunteersRequired: 5,
    foods: [
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Polenta',
      },
    ],
  },
  {
    name: 'Flores',
    email: 'flores@center.com',
    password: 'flores1?',
    phone: '46645',
    street: 'San martin',
    numberDoor: '0043',
    zone: 'Cerrito',
    departament: 'Montevideo',
    numberVolunteersRequired: 8,
  },
  {
    name: 'Centro gruta',
    email: 'centrogruta@center.com',
    password: 'centrogruta1?',
    phone: '09876',
    street: 'Gruta de lourdes',
    numberDoor: '3121232',
    zone: 'Casavalle',
    departament: 'Montevideo',
    foods: [
      {
        amount: Math.floor(Math.random() * 100),
        unitMeasurement: 'KG',
        name: 'Harina',
      },
    ],
  },
]

export { donators, centers }
