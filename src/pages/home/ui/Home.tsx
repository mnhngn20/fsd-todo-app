import { Link } from '@tanstack/react-router';
import { useIsAuthenticated } from '@/features/authenticate';
import { Button } from '@/shared/ui';
import { FEATURE_LIST } from '../constants/feature-list';
import { FeatureIcon } from './FeatureIcon';
import { Footer } from './Footer';

export function HomePage() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      <main>
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Manage Your Tasks with Ease
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              TaskMaster helps you organize, plan, and collaborate on projects
              big and small. Start boosting your productivity today!
            </p>
            {isAuthenticated ? (
              <Button size="lg" asChild>
                <Link href="/all-tasks">Go Manage your task</Link>
              </Button>
            ) : (
              <Button size="lg" asChild>
                <Link href="/sign-up">Get Started for Free</Link>
              </Button>
            )}
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Features that Make Task Management a Breeze
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURE_LIST.map(feature => (
                <FeatureIcon
                  icon={feature.icon}
                  title={feature.title}
                  key={feature.description}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Things Done?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of productive individuals and teams who trust
              TaskMaster for their task management needs.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
