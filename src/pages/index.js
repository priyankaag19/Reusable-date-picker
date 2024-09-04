import Head from 'next/head';
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Date Picker Component</title>
        <meta name="description" content="A reusable date picker component in React with recurrence options" />
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <DatePicker />
      </main>
    </div>
  );
}
