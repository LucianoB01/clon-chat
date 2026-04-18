const users = [
  {
    id: 1,
    userName: 'John Doe',
    lastSession: new Date(),
    photo: '',
    conversation: [
      {
        message: 'Anotaciones',
        sender: 'John Doe'
      },
      {
        message: 'Lista super',
        sender: 'John Doe'
      },
      {
        message: '  - Comprar pan',
        sender: 'John Doe'
      }
    ]
  },
  {
    id: 2,
    userName: 'Luis',
    lastSession: new Date(),
    photo: '',
    conversation: [
      {
        message: 'Hola',
        sender: 'John Doe'
      },
      {
        message: 'Como estas?',
        sender: 'Luis'
      },
      {
        message: 'Bien y vos?',
        sender: 'John Doe'
      }
    ]
  },
  {
    id: 3,
    userName: 'Carlos',
    lastSession: new Date(),
    photo: '',
    conversation: [
      {
        message: 'Te paso el presupuesto que me pediste',
        sender: 'Carlos'
      },
      {
        message: 'Dale',
        sender: 'John Doe'
      },
      {
        message: 'Perfecto',
        sender: 'Carlos'
      }
    ]
  }
]

export default users
