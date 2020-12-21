export default function positionColor(position: number): string {
  switch (position) {
    case 1:
      return '#E79C21';

    case 2:
      return '#C0C0C0';

    case 3:
      return '#BD4400';

    default:
      return 'white';
  }
}
