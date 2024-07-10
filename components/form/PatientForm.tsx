"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form
} from "@/components/ui/form"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
 


export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}
 
const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  async function onSubmit({ name, email, phone,}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
        // const userData = { name, email, phone };
        // const user = await createUser(userData);
        // if (user) router.push(`/patients/${user.$id}/register`)
    } catch (err) {
        console.log(err);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h2 className="header">Hi there</h2>
            <p className="text-dark-700">Lorem ipsum dolor sit amet.</p>
        </section>
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="full name"
            placeholder="Jhon Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
        />
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="jhon.doe@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
        />
        <CustomFormField 
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="phone"
                  label="Phone Number"
                  placeholder="(555) 123-4567" iconSrc={""} iconAlt={""}        />
        <SubmitButton isLoading={isLoading}>Entrar</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm