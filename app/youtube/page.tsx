"use client";

import "@/app/css/image.css";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  keywords: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  /* stylePrimary: z.string().min(2, {
    message: "Select a style.",
  }),
  styleSecondary: z.string().min(2, {
    message: "Select a style.",
  }), */
});

export default function Chat() {
  const [url, setUrl] = useState<[{ url: string }]>([{ url: "" }]);
  const [titles, setTitles] = useState();
  const [description, setDescription] = useState();
  const [hashtags, setHashtags] = useState();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
      keywords: "",
      description: "",
      /* stylePrimary: "",
      styleSecondary: "", */
    },
  });

  const getImages = (data: z.infer<typeof FormSchema>) => {
    fetch("/api/completions/image", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(res => {
        setUrl(res);
        setLoading(false);
        toast({
          title: "Generated Thumbnails.",
        });
      })
      .catch(error => {
        setLoading(false);
        console.log("Catch Error:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      })
      .finally(() => setLoading(false));
  };

  const getTitles = (data: z.infer<typeof FormSchema>) => {
    fetch("/api/completions/title", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        setTitles(res);
        toast({
          title: "Generated Titles.",
        });
      })
      .catch(error => {
        console.log("Catch Error:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      })
      .finally(() => setLoading(false));
  };

  const getDescription = (data: z.infer<typeof FormSchema>) => {
    fetch("/api/completions/description", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        setDescription(res);
        toast({
          title: "Generated Description.",
        });
      })
      .catch(error => {
        console.log("Catch Error:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      })
      .finally(() => setLoading(false));
  };

  const getHashtags = (data: z.infer<typeof FormSchema>) => {
    fetch("/api/completions/hashtags", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        setHashtags(res);
        toast({
          title: "Generated Hashtags.",
        });
      })
      .catch(error => {
        console.log("Catch Error:", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      })
      .finally(() => setLoading(false));
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    toast({
      title: "Generating.",
    });
    /* getImages(data); */
    getDescription(data);
    getTitles(data);
    getHashtags(data);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-8 mt-20 px-6 pb-10">
        <Header />

        <h1 className="text-left text-4xl font-bold max-w-6xl w-full">
          Generator Youtube
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 max-w-6xl w-full">
            <div className="flex flex-col md:flex-row gap-5 justify-between">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>What is a topic of your video?</FormLabel>
                    <FormControl>
                      <Input placeholder="Programing..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>What are a keywords of your video?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Computer, Frontend, Backend"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>
                      What is a description global of your video?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="This a video about is..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <div className="flex flex-col md:flex-row gap-5 justify-between">
              <FormField
                control={form.control}
                name="stylePrimary"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Style Primary</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a style of thumbnails" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="realistic">Realistic</SelectItem>
                        <SelectItem value="futuristic">Futuristic</SelectItem>
                        <SelectItem value="digital art">Digital Art</SelectItem>
                        <SelectItem value="3d">3D</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="styleSecondary"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Style Secondary</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a style of thumbnails" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="realistic">Realistic</SelectItem>
                        <SelectItem value="futuristic">Futuristic</SelectItem>
                        <SelectItem value="3d">3D</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
            <div>
              <Button type="submit" disabled={loading}>
                Submit{" "}
                {loading && <Loader2 className="h-4 w-4 ml-2 animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>

        <div className="max-w-6xl w-full">
          <h2 className="w-full mb-6 font-bold text-2xl">Titles</h2>
          <div className="w-full border-2 border-red-300/70 rounded-lg border-dashed p-4">
            {titles}
          </div>
        </div>

        <div className="max-w-6xl w-full">
          <h2 className="w-full mb-6 font-bold text-2xl">Description</h2>
          <div className="w-full border-2 border-red-300/70 rounded-lg border-dashed p-4">
            {description}
          </div>
        </div>

        {/* <div>
          <h2 className="w-full mb-6 font-bold text-2xl">Images</h2>

          {url.length !== 1 && (
            <ul className="flex flex-col md:flex-row gap-4 max-w-6xl">
              {url.map((e, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={e.url}
                    alt=""
                    className="w-80 h-80 object-cover aspect-square"
                  />
                  <Button>
                    <a href={e.url} download>
                      Download
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          )}

          {url.length === 1 && (
            <div className="flex flex-col md:flex-row gap-4 max-w-6xl">
              <div className="border-2 border-red-300/70 rounded-lg border-dashed">
                <div
                  className={`loader ${loading ? "loaderActive" : ""}`}></div>
              </div>
              <div className="border-2 border-red-300/70 rounded-lg border-dashed">
                <div
                  className={`loader ${loading ? "loaderActive" : ""}`}></div>
              </div>
              <div className="border-2 border-red-300/70 rounded-lg border-dashed">
                <div
                  className={`loader ${loading ? "loaderActive" : ""}`}></div>
              </div>
            </div>
          )}
        </div> */}

        <div className="max-w-6xl w-full">
          <h2 className="w-full mb-6 font-bold text-2xl">Hashtags</h2>
          <div className="w-full border-2 border-red-300/70 rounded-lg border-dashed p-4">
            {hashtags}
          </div>
        </div>
      </div>
    </>
  );
}
