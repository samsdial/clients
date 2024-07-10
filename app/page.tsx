import PatientForm from "@/components/form/PatientForm";
import Image from "next/image";
import Link from "next/link";

interface ComponentProps {
    params: any
}
export default function Home(params: ComponentProps) {
    return (
      <div className="flex h-screen max-h-screen">
        {/* TODO: OPT VERIFICATION */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height="1000"
            width="1000"
            alt="client"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-item-end text-dark-600 xl:text-left">lorem</p>
            <Link href="/?admin=true" className="text-green-500"> Admin</Link>
          </div>
        </div>
      </section>
        <Image
            src="/assets/images/onboarding-img.png"
            height={1000}
            width={1000}
            alt="client"
            className="side-img max-w-[50%]"
          />
      </div>
    );
}