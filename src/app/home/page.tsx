import MainLayout from '@/components/layout/MainLayout';


export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="Montserrat text-[var(--text-primary-dark)] text-2xl font-bold">Home</h1>
      <p className="Montserrat text-[var(--text-primary-dark)] text-s pt-4">Hi, This is the home page</p>

    </MainLayout>
  );
}