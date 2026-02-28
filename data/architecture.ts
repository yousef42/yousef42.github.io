export interface ArchitectureFocusItem {
  title: string;
  summary: string;
  patterns: string[];
  relatedProjects: string[];
}

export interface ArchitectureDiagram {
  id: string;
  label: string;
  summary: string;
  focus: string[];
  mermaid: string;
}

export const architectureFocusItems: ArchitectureFocusItem[] = [
  {
    title: "Modular Monolith با مرز دامنه شفاف",
    summary:
      "برای فازهای اولیه و رشد کنترل‌شده، سیستم را ماژولار طراحی می‌کنم تا هم سرعت توسعه بالا بماند و هم coupling بین حوزه‌ها حداقل شود.",
    patterns: ["DDD", "CQRS", "MediatR", "Outbox/Inbox", "RBAC"],
    relatedProjects: ["سفرمال"],
  },
  {
    title: "آمادگی برای مهاجرت به Microservices",
    summary:
      "از ابتدا قراردادها، boundaryها و جریان‌های async را طوری می‌چینم که در صورت رشد محصول، extraction سرویس‌ها کم‌هزینه و قابل پیش‌بینی باشد.",
    patterns: ["Service Boundary", "Async Integration", "Event-driven Flows", "Observability-ready"],
    relatedProjects: ["سفرمال", "پروژه‌های API در web-project"],
  },
  {
    title: "Clean / Onion در بک‌اند",
    summary:
      "منطق کسب‌وکار را از زیرساخت جدا نگه می‌دارم تا تست‌پذیری بالا، تغییرپذیری سریع و نگه‌داری ساده‌تر برای تیم ممکن باشد.",
    patterns: ["UseCase Layer", "Repository Abstraction", "Domain-centric Rules", "Dependency Inversion"],
    relatedProjects: ["سفرمال", "گیفت ۲۰ (پنل ادمین)"],
  },
  {
    title: "معماری اندروید با MVVM و MVI",
    summary:
      "در اپ‌های Compose، state را به‌صورت تک‌منبعی مدیریت می‌کنم و جریان رویداد تا رندر UI را قابل ردیابی نگه می‌دارم.",
    patterns: ["Jetpack Compose", "MVVM", "MVI", "State Hoisting", "Unidirectional Data Flow"],
    relatedProjects: ["نوا", "Nava-tv", "پروژه‌های AndroidStudioProjects"],
  },
];

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: "modular-monolith",
    label: "Modular Monolith",
    summary: "الگوی اصلی برای تحویل سریع، کنترل پیچیدگی و حفظ مرز ماژول‌ها در یک deployment واحد.",
    focus: ["DDD Boundaries", "CQRS", "Event Sourcing (Payments)", "Background Jobs"],
    mermaid: `flowchart TB
      subgraph Clients [Clients]
        Android[Android]
        iOS[iOS]
        Web[Web]
      end

      API[ASP.NET Core API]

      subgraph Monolith [Modular Monolith]
        Users[Users Module]
        Travel[Travel Module]
        Payments[Payments Module]
        Content[Content Module]
      end

      subgraph Infra [Infrastructure]
        SQL[(SQL Server)]
        Jobs[Quartz Jobs]
        Bus[Internal Events]
      end

      Android --> API
      iOS --> API
      Web --> API
      API --> Users
      API --> Travel
      API --> Payments
      API --> Content
      Users --> SQL
      Travel --> SQL
      Payments --> SQL
      Payments --> Bus
      Bus --> Jobs`,
  },
  {
    id: "microservice-transition",
    label: "Microservice Transition",
    summary: "مسیر تکامل از ماژولار مونولیت به سرویس‌های مستقل بدون بازنویسی پرهزینه.",
    focus: ["Contract-first APIs", "Service Extraction", "Per-service Data Ownership", "Async Communication"],
    mermaid: `flowchart LR
      Client[Mobile/Web Clients] --> Gateway[API Gateway]
      Gateway --> UserSvc[User Service]
      Gateway --> OrderSvc[Order Service]
      Gateway --> PaymentSvc[Payment Service]
      Gateway --> NotifySvc[Notification Service]

      UserSvc --> UserDB[(User DB)]
      OrderSvc --> OrderDB[(Order DB)]
      PaymentSvc --> PaymentDB[(Payment DB)]
      NotifySvc --> NotifyDB[(Notification DB)]

      OrderSvc --> EventBus[(Event Bus)]
      PaymentSvc --> EventBus
      EventBus --> NotifySvc`,
  },
  {
    id: "clean-onion-backend",
    label: "Clean / Onion Backend",
    summary: "جدا کردن منطق دامنه از جزئیات فریم‌ورک برای توسعه‌پذیری بلندمدت.",
    focus: ["Domain Core", "Application Use Cases", "Infrastructure Adapters", "Dependency Inversion"],
    mermaid: `flowchart TB
      UI[API / Controllers] --> App[Application Layer]
      App --> Domain[Domain Core]
      App --> Ports[Ports / Interfaces]
      Ports --> Infra[Infrastructure Adapters]
      Infra --> DB[(Database)]
      Infra --> External[External Services]`,
  },
  {
    id: "android-mvvm-mvi",
    label: "Android MVVM + MVI",
    summary: "الگوی مدیریت state در پروژه‌های Compose برای پیش‌بینی‌پذیری رفتار UI.",
    focus: ["Intent/Event", "Reducer/State", "ViewModel", "UseCase + Repository"],
    mermaid: `flowchart LR
      UI[Compose Screen] --> Intent[User Intent/Event]
      Intent --> VM[ViewModel]
      VM --> UseCase[UseCase]
      UseCase --> Repo[Repository]
      Repo --> Source[Remote/Local Data]
      VM --> Reducer[State Reducer]
      Reducer --> State[UI State]
      State --> UI`,
  },
];
