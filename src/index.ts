export default function howmuch(): number {
  return 123;
}

export function time(): number {
  return 456;
}
export function mass(): number {
  return 789;
}
export function money(): number {
  return 101;
}
export function speed(): number {
  return 112;
}

howmuch.time = time;
howmuch.mass = mass;
howmuch.money = money;
howmuch.speed = speed;

