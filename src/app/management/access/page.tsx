import MainLayout from '@/components/layout/MainLayout';
import Breadcrumb from '@/components/ui/breadcrumb';


export default function AccessManagementPage() {
  return (
    <MainLayout>
      <h1 className="Montserrat text-[var(--text-primary-dark)] text-2xl font-bold">Access Log</h1>
      <Breadcrumb className="mt-2" items={[{ label: 'Management', href: '/management' }, { label: 'Access Control' }]} />
    </MainLayout>
  );
}