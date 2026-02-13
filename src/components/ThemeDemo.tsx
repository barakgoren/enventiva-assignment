export function ThemeDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">
            Blue Ocean Theme Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            Beautiful, consistent design system
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-4 animate-slide-up">
          <h2 className="text-2xl font-semibold text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary px-6 py-3">
              Primary Button
            </button>
            <button className="btn btn-secondary px-6 py-3">
              Secondary Button
            </button>
            <button className="btn btn-outline px-6 py-3">
              Outline Button
            </button>
            <button className="btn btn-ghost px-6 py-3">
              Ghost Button
            </button>
            <button className="btn btn-destructive px-6 py-3">
              Delete
            </button>
            <button className="btn btn-primary px-6 py-3" disabled>
              Disabled
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Basic Card */}
            <div className="card p-6 space-y-2">
              <h3 className="text-lg font-semibold">Basic Card</h3>
              <p className="text-muted-foreground">
                A simple card with border and shadow.
              </p>
            </div>

            {/* Hover Card */}
            <div className="card card-hover p-6 space-y-2 cursor-pointer">
              <h3 className="text-lg font-semibold">Hover Card</h3>
              <p className="text-muted-foreground">
                Try hovering over this card!
              </p>
            </div>

            {/* Colored Card */}
            <div className="card p-6 space-y-2 bg-primary text-primary-foreground border-primary">
              <h3 className="text-lg font-semibold">Primary Card</h3>
              <p className="opacity-90">
                Card with primary background color.
              </p>
            </div>

            {/* Success Card */}
            <div className="card p-6 space-y-2 bg-success text-success-foreground border-success">
              <h3 className="text-lg font-semibold">Success Card</h3>
              <p className="opacity-90">
                Great! Everything worked.
              </p>
            </div>

            {/* Warning Card */}
            <div className="card p-6 space-y-2 bg-warning text-warning-foreground border-warning">
              <h3 className="text-lg font-semibold">Warning Card</h3>
              <p className="opacity-90">
                Be careful with this action.
              </p>
            </div>

            {/* Destructive Card */}
            <div className="card p-6 space-y-2 bg-destructive text-destructive-foreground border-destructive">
              <h3 className="text-lg font-semibold">Error Card</h3>
              <p className="opacity-90">
                Something went wrong.
              </p>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Form Inputs</h2>
          <div className="max-w-md space-y-4">
            <input 
              type="text" 
              placeholder="Enter your name..." 
              className="input"
            />
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="input"
            />
            <textarea 
              placeholder="Write a message..." 
              className="input min-h-[100px]"
            />
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary shadow-md"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-secondary shadow-md"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent shadow-md"></div>
              <p className="text-sm font-medium">Accent</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted shadow-md"></div>
              <p className="text-sm font-medium">Muted</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-success shadow-md"></div>
              <p className="text-sm font-medium">Success</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-warning shadow-md"></div>
              <p className="text-sm font-medium">Warning</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-destructive shadow-md"></div>
              <p className="text-sm font-medium">Destructive</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-card border-2 border-border shadow-md"></div>
              <p className="text-sm font-medium">Card</p>
            </div>
          </div>
        </section>

        {/* Artist Card Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Artist Card Example</h2>
          <div className="card card-hover overflow-hidden max-w-sm cursor-pointer group">
            <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Coldplay
              </h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Rock
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  UK
                </span>
              </div>
              <button className="btn btn-primary w-full py-2">
                View Details
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}