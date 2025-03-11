import Banner from '@/components/landing/Banner';
import TopFeatures from '@/components/landing/TopFeatures';
import FeaturePreview from '@/components/landing/feature-preview';
import StatsCarousel from '@/components/landing/carousel/StatsCarousel';
import BenefitsSection from '@/components/landing/Benefits';
import Steps from '@/components/landing/steps';
import Integrations from '@/components/landing/Integrations';
import Reviews from '@/components/landing/Reviews';
import Faq from '@/components/landing/Faq';
import CallToAction from '@/components/landing/CallToAction/CallToAction';

export default function Landing(){
    return(
        <>
            <Banner />
            <TopFeatures />
            <FeaturePreview/>
            <StatsCarousel/>
            <BenefitsSection/>
            <Steps/>
            <Integrations/>
            <Reviews/>
            <Faq/>
            <CallToAction />
        </>
    )
}