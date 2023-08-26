const data = [
  {
    id: 1,
    brand: 'Nike',
    model: 'Air Max 90',
    color: 'White/Black',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    gender: 'Men',
    price: 150.00,
    stock: {
      8: 10,
      8.5: 15,
      9: 20,
      9.5: 25,
      10: 30,
      10.5: 35,
      11: 40,
      11.5: 45,
      12: 50
    },
    categories: ['Running', 'Athletic', 'Fashion'],
    isLimitedEdition: false,
    isFavorite: false,
    description: "The Nike Air Max 90 is a timeless classic that combines style and comfort. With its iconic design and cushioned sole, it's the perfect choice for both athletic activities and everyday fashion. The White/Black colorway adds a versatile touch to any outfit.",
    images: [
      'link_to_front_image.jpg',
      'link_to_side_image.jpg',
      'link_to_back_image.jpg',
      'link_to_top_image.jpg',
      'link_to_bottom_image.jpg'
    ]
  }
]

// obtener todas las zapatillas
export const listSneakers = () => data

// obtener zapatillas por id
export const getSneakerById = (id: number) => data.find(z => z.id === id)

// buscar zapatillas por marca
export const searchSneakersByBrand = () => data

// agregar una zapatilla
export const addSneaker = (sneaker: any) => data

// actualizar una zapatilla
export const updateSneaker = () => data

// eliminar una zapatilla
export const deleteSneaker = () => data
