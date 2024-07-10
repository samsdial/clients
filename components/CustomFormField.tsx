"use client"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import Image from "next/image";
import { Control } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FormFieldType } from './form/PatientForm';
import { Input } from "./ui/input";



interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string, 
    label?: string, 
    placeholder: string, 
    iconSrc: string, 
    iconAlt: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?:boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({field, props}: { field: any, props: CustomProps}) => {
    const { fieldType, name, label, placeholder, iconSrc, iconAlt} = props;
    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={iconAlt || 'icon'}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput 
                        defaultCountry="US"
                        placeholder={placeholder}
                        interaction
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone"
                    />
                </FormControl>
            )
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label, placeholder, iconSrc, iconAlt } = props;
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              {fieldType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}
              <RenderField field={field} props={props} />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField