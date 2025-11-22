"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  level: {
    label: "Kecakapan",
    color: "hsl(var(--primary))",
  },
}

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Keahlian Saya</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Saya memiliki pengalaman dengan berbagai teknologi jaringan, memungkinkan saya untuk membangun infrastruktur yang kuat dan skalabel.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl pt-12">
          <Card>
            <CardHeader>
              <CardTitle>Kecakapan Teknis</CardTitle>
              <CardDescription>Rincian visual dari keahlian saya. Saya selalu belajar dan memperluas perangkat saya.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    accessibilityLayer
                    data={portfolioData.skills}
                    layout="vertical"
                    margin={{ left: 10, top: 10, right: 10, bottom: 10 }}
                  >
                    <YAxis
                      dataKey="name"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                      width={120}
                    />
                    <XAxis type="number" dataKey="level" hide />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--muted))" }}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="level" layout="vertical" radius={5} fill="var(--color-level)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
