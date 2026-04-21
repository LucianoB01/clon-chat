const users = [
  {
    id: 1,
    userName: 'Pepe',
    lastSession: new Date().toISOString(),
    photo: 'https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg',
    conversation: [
      {
        message: 'Anotaciones',
        sender: 'Pepe'
      },
      {
        message: 'Lista super',
        sender: 'Pepe'
      },
      {
        message: '  - Comprar pan',
        sender: 'Pepe'
      }
    ]
  },
  {
    id: 2,
    userName: 'Luis',
    lastSession: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    photo: 'https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg',
    conversation: [
      {
        message: 'Hola',
        sender: 'Pepe'
      },
      {
        message: 'Como estas?',
        sender: 'Luis'
      },
      {
        message: 'Bien y vos?',
        sender: 'Pepe'
      }
    ]
  },
  {
    id: 3,
    userName: 'Carlos',
    lastSession: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    photo: 'https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg',
    conversation: [
      {
        message: 'Te paso el presupuesto que me pediste',
        sender: 'Carlos'
      },
      {
        message: 'Dale',
        sender: 'Pepe'
      },
      {
        message: 'Perfecto',
        sender: 'Carlos'
      }
    ]
  }
]

export default users
