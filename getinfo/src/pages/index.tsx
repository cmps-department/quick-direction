import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth/next";
import { getProviders, signIn } from "next-auth/react"
import authOptions from "./api/auth/[...nextauth]";
import HomePageView from "../features/HomePageView";
import LayoutHF from "../layouts/LayoutHF";
import PageLayout from "../layouts/PageLayout";


export default function HomePage({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const azureProvider = Object.values(providers).find(provider => provider.id === "azure-ad");

    return (
        <PageLayout title={"Home"}>
            <LayoutHF login={() => signIn(azureProvider?.id)} headerType="extended"> 
                <HomePageView />
            </LayoutHF>
        </PageLayout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    
    if (session) {
      return { redirect: { destination: "/" } };
    }
  
    const providers = await getProviders();
    
    return {
      props: { providers: providers ?? [] },
    }
  }
