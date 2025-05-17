"use client"
import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {Textarea} from "@/components/ui/textarea";


export default function AppContact({t, className}: { t: TranslationDictionary, className?: string}) {
  const formSchema = z.object({
    name: z.string().min(1, {
      message: t.contact.form.name_required
    }).min(2, {
      message: t.contact.form.name_error
    }),
    email: z.string().min(1, { message: t.contact.form.email_required }).email({
      message: t.contact.form.email_error
    }),
    message: z.string().min(1, { message: t.contact.form.message_required }).min(10, {
      message: t.contact.form.message_error
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const apiEndpoint = '/api/email';

    toast.promise(fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(values),
    }), {
      loading: t.contact.form.loading,
      success: () => t.contact.form.success,
      error: t.contact.form.error,
    });

    form.reset()
  }

  const fields: {
    name: "name" | "email" | "message",
    type: "text" | "email" | "textarea",
    placeholder: string,
    label: string
  }[] = [
    {
      name: "name",
      label: t.contact.form.name,
      placeholder: t.contact.form.name_placeholder,
      type: "text",
    },
    {
      name: "email",
      label: t.contact.form.email,
      placeholder: t.contact.form.email_placeholder,
      type: "email",
    },
    {
      name: "message",
      label: t.contact.form.message,
      placeholder: t.contact.form.message_placeholder,
      type: "textarea",
    }
  ]

  return (
    <section className={cn("flex flex-col lg:flex-row justify-center lg:gap-24 gap-8", className)}>
      <div className={"mr-0 lg:mr-48 flex flex-col justify-center"}>
        <h1 className={"text-center mt-4 mb-8"}>{t.contact.title}</h1>
        <div className={"flex items-center justify-center lg:justify-start mb-4"}>
          <FontAwesomeIcon icon={faPhone} className={"mr-4"}/>
          <span>{t.contact.phone}</span>
        </div>
        <div className={"flex items-center justify-center lg:justify-start mb-4"}>
          <FontAwesomeIcon icon={faEnvelope} className={"mr-4"}/>
          <span>{t.contact.mail}</span>
        </div>
        <div className={"flex items-center justify-center lg:justify-start mb-4"}>
          <FontAwesomeIcon icon={faLocationDot} className={"mr-4"}/>
          <span>{t.contact.location}</span>
        </div>
      </div>
      <div className={"flex flex-col items-center lg:block"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-84">
            {fields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={(rend) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder}
                          {...rend.field}
                        />
                        ) : (
                        <Input
                          placeholder={field.placeholder}
                          {...rend.field}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" className={"w-full cursor-pointer"}>{t.contact.submit}</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}