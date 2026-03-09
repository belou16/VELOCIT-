import { Router, Request, Response } from 'express';

interface Car {
  id: number;
  name: string;
  brand: 'Ferrari' | 'Alfa Romeo' | 'Maserati' | 'Lamborghini';
  year: number;
  location: string;
  dailyPriceEUR: number;
  insuranceIncluded: boolean;
}

const router = Router();

const cars: Car[] = [
  {
    id: 1,
    name: 'Ferrari 250 GTO',
    brand: 'Ferrari',
    year: 1962,
    location: 'Maranello',
    dailyPriceEUR: 850,
    insuranceIncluded: true,
  },
  {
    id: 2,
    name: 'Alfa Romeo Giulia Sprint GT',
    brand: 'Alfa Romeo',
    year: 1965,
    location: 'Milan',
    dailyPriceEUR: 450,
    insuranceIncluded: true,
  },
  {
    id: 3,
    name: 'Maserati Ghibli',
    brand: 'Maserati',
    year: 1967,
    location: 'Turin',
    dailyPriceEUR: 620,
    insuranceIncluded: false,
  },
  {
    id: 4,
    name: 'Lamborghini Miura P400',
    brand: 'Lamborghini',
    year: 1966,
    location: 'Bologna',
    dailyPriceEUR: 790,
    insuranceIncluded: true,
  },
];

router.get('/api/cars/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: 'Invalid car id. Expected a positive integer.',
    });
  }

  const car = cars.find((item) => item.id === id);

  if (!car) {
    return res.status(404).json({
      message: 'Car not found.',
    });
  }

  return res.status(200).json({
    data: car,
  });
});

export default router;
