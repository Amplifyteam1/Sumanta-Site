interface ProcessStep {
  title: string
  description: string
  duration?: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              {index + 1}
            </div>
            {index < steps.length - 1 && <div className="w-0.5 h-full bg-border my-2" />}
          </div>
          <div className="flex-1 pb-6">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold">{step.title}</h4>
              {step.duration && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{step.duration}</span>
              )}
            </div>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
