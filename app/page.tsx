import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { MouseTrack } from '../components/MouseTrack/MouseTrack';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <MouseTrack />
    </>
  );
}
