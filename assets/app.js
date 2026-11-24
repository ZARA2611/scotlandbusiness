(function () {
  const SITE = {
    name: "Scotland Business Guide",
    domain: "https://scotlandbusinessguide.com",
    email: "hello@scotlandbusinessguide.com",
    privacyEmail: "privacy@scotlandbusinessguide.com",
    verified: "November 2026",
    connectdStartups: "https://join.connectd.co/0o02cxpm5hwh-uk-startups",
    connectdTalent: "https://join.connectd.co/cwm6pit9z6bi"
  };

  const PHOTOS = {
    hero: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    grants: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    startup: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    hubs: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    foodDrink: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
    womenNetwork: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    chamberNetwork: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80",
    students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
  };

  const REGIONS = [
    {
      slug: "glasgow",
      name: "Glasgow & West of Scotland",
      summary: "Central Belt commercial hub featuring Royal Bank Accelerator Glasgow (110 Queen St), Barclays Innovation Hub Glasgow (58 Kingston St), Strathclyde Inspire, and major women's and Asian business networks.",
      highlights: [
        "Royal Bank Accelerator Glasgow: The Royal Bank of Scotland, 4th floor, 110 Queen St, Glasgow, G1 3BX",
        "Barclays Innovation Hub Glasgow: Beco Building, 58 Kingston Street, Glasgow, G5 8BP",
        "FSB Scotland Head Office: Suite 8B, 58 Waterloo Street, Glasgow, G2 7DA (Tel: 0141 2210 775)",
        "Scottish Asian Business Association (SABA CIC) registered in Scotland (SC840174) and SAWBA Women in Business"
      ]
    },
    {
      slug: "edinburgh",
      name: "Edinburgh & East/Mid/South Scotland",
      summary: "Capital city and surrounding east/mid/south enterprise corridor with Royal Bank Accelerator Edinburgh (142-144 Princes St), University of Edinburgh Accelerator Hub (1 Lauriston Pl), and CodeBase supported by Barclays Eagle Labs.",
      highlights: [
        "Royal Bank Accelerator Edinburgh: 142-144 Princes Street, Edinburgh, EH2 4EQ",
        "University of Edinburgh Accelerator Hub: Edinburgh Futures Institute, 1 Lauriston Place, Edinburgh, EH3 9EF",
        "CodeBase supported by Barclays Eagle Labs Edinburgh: 37a Castle Terrace, Edinburgh, EH1 2EL",
        "Edinburgh Innovations Student Enterprise & Launch Point plus Converge academic enterprise support"
      ]
    },
    {
      slug: "aberdeen",
      name: "Aberdeen & North East Scotland",
      summary: "Home to ONE SeedPod food and drink innovation hub on the SRUC Craibstone Campus, Robert Gordon University Startup Accelerator, and AB Venture Zone.",
      highlights: [
        "ONE SeedPod: Scotland's Food & Drink Innovation Hub, SRUC Craibstone Campus, Aberdeen (Tel: 01224 061100)",
        "Robert Gordon University (RGU) Startup Accelerator (up to £10,000 support, mentoring, and workspace)",
        "AB Venture Zone student and graduate enterprise support in Aberdeen",
        "Business Gateway Aberdeen City & Aberdeenshire 100% free advisory and workshops"
      ]
    },
    {
      slug: "dundee",
      name: "Dundee & Tayside",
      summary: "Creative media, life sciences, and digital enterprise centre supported by Business Gateway Tayside, university enterprise hubs, and SABA network activity.",
      highlights: [
        "Business Gateway Tayside: 100% free one-to-one business advice and start-up workshops",
        "Converge and university student/graduate entrepreneurship pathways",
        "Scottish Asian Business Association (SABA) active Scottish network hub"
      ]
    },
    {
      slug: "highlands-and-islands",
      name: "Highlands & Islands (including Loch Lomond)",
      summary: "Supported by Highlands and Islands Enterprise (HIE), Business Gateway Highlands & Islands, and regional community and women's business networks around Loch Lomond.",
      highlights: [
        "Highlands and Islands Enterprise (HIE): business, social enterprise, and community development support",
        "Lomond Business Network: networking around Loch Lomond and Cameron House Hotel",
        "100% free Business Gateway workshops, planning templates, and local advisers"
      ]
    },
    {
      slug: "south-of-scotland",
      name: "South of Scotland (Dumfries & Galloway / Borders)",
      summary: "Supported by South of Scotland Enterprise (SOSE) and Business Gateway across Dumfries and Galloway and the Scottish Borders.",
      highlights: [
        "South of Scotland Enterprise (SOSE): enterprise, innovation, and community growth support across Dumfries & Galloway and the Scottish Borders",
        "Business Gateway local advisers and free growth webinars"
      ]
    },
    {
      slug: "stirling-and-central",
      name: "Stirling & Central Scotland",
      summary: "Central Scotland enterprise hub featuring Stirling Enterprise Park, Business Gateway Stirling, and University of Stirling Enterprise Programme & The Hive.",
      highlights: [
        "Stirling Enterprise Park, Players Road, Stirling, FK7 7RP",
        "Business Gateway Stirling, John Player Building, Stirling, FK7 7RP",
        "University of Stirling Enterprise Programme & The Hive (enterprise@stir.ac.uk)"
      ]
    },
    {
      slug: "lanarkshire-and-ayrshire",
      name: "Lanarkshire & Ayrshire",
      summary: "West Central Scotland business corridor supported by Business Gateway Lanarkshire, Lanarkshire Business Hub (New College Lanarkshire), FSB West of Scotland, and Ayrshire enterprise links.",
      highlights: [
        "Lanarkshire Business Hub (via New College Lanarkshire) and Business Gateway Lanarkshire",
        "FSB Scotland West of Scotland engagement covering Glasgow, Lanarkshire, and Ayrshire",
        "100% free start-up guidance, local grants signposting, and mentoring introductions"
      ]
    }
  ];

  const SUPPORT_ORGS = [
    {
      name: "Business Gateway Scotland",
      category: "Public Business Support",
      cost: "100% Free",
      region: "All Scotland",
      summary: "Scotland's national publicly funded business support service offering free one-to-one adviser sessions, start-up workshops, market research, and growth guidance.",
      url: "https://www.bgateway.com/",
      contact: "https://www.bgateway.com/about-us"
    },
    {
      name: "Scottish Enterprise",
      category: "Economic Development Agency",
      cost: "Public Agency (Free Guidance / Programmes)",
      region: "Scotland (excl. HIE & SOSE areas)",
      summary: "Scotland's national economic development agency backing ambitious businesses with advice, innovation support, export guidance, and funding programmes.",
      url: "https://www.scottish-enterprise.com/",
      contact: "https://www.scottish-enterprise.com/our-organisation"
    },
    {
      name: "Highlands and Islands Enterprise (HIE)",
      category: "Regional Enterprise Agency",
      cost: "Public Agency",
      region: "Highlands & Islands",
      summary: "Supports businesses, social enterprises, and communities across the Highlands and Islands to build sustainable economic growth.",
      url: "https://www.hie.co.uk/",
      contact: "https://www.hie.co.uk/our-region/"
    },
    {
      name: "South of Scotland Enterprise (SOSE)",
      category: "Regional Enterprise Agency",
      cost: "Public Agency",
      region: "South of Scotland",
      summary: "Enterprise and community development agency supporting businesses and enterprising communities across Dumfries & Galloway and the Scottish Borders.",
      url: "https://www.southofscotlandenterprise.com/",
      contact: "https://www.southofscotlandenterprise.com/about"
    },
    {
      name: "Federation of Small Businesses (FSB) Scotland",
      category: "Small Business Membership & Advocacy",
      cost: "Paid Membership (from £199/yr; promotional offers apply) + Open Webinars",
      region: "All Scotland (West, East/Mid/South, North)",
      summary: "Represents small businesses and the self-employed across Scotland with policy advocacy, business advice, and regional events. Head office: Suite 8B, 58 Waterloo Street, Glasgow, G2 7DA (Tel: 0141 2210 775, scotland.policy@fsb.org.uk).",
      url: "https://www.fsb.org.uk/membership/support-near-you/scotland",
      contact: "https://www.fsb.org.uk/contact"
    },
    {
      name: "Scottish Asian Business Association (SABA CIC)",
      category: "Asian Business & Women's Network",
      cost: "First Year Free Individual Membership (£0 for 365 days; £79/yr from day 366)",
      region: "Glasgow, Edinburgh, Aberdeen, Dundee, Inverness",
      summary: "Scottish Community Interest Company (SC840174, 19 Kirkwood Avenue, Stepps, G33 6GD, contact@sabauk.org) connecting Asian businesses, professionals, and allies across Scotland, including SAWBA Women in Business monthly online networking and mentoring.",
      url: "https://sabauk.org/",
      contact: "https://www.scottish-enterprise.com/how-we-can-help/business-strategy/support-for-entrepreneurs/ecosystem-organisations/entrepreneur-support-and-networking-organisations/scottish-asian-business-association"
    },
    {
      name: "Scottish Asian Business Chamber (SABC)",
      category: "Diverse Business Chamber",
      cost: "Community & Event Access",
      region: "Scotland",
      summary: "Convenes diverse business owners, policymakers, and institutional partners through Business Collect gatherings, Aspire Women's Network, and founder peer groups.",
      url: "https://www.asianbusinesschamber.scot/",
      contact: "https://www.asianbusinesschamber.scot/"
    },
    {
      name: "Scottish Women in Business (SWIB)",
      category: "Women's Business Network",
      cost: "Member & Event Access",
      region: "Scotland",
      summary: "Supports women in business and leadership across Scotland with networking events, collaborations, and community connection.",
      url: "https://www.scottishwomeninbusiness.org.uk/events/",
      contact: "https://www.scottishwomeninbusiness.org.uk/events/544-multi-club-virtual-networking-for-women-in-business--november/"
    },
    {
      name: "Glasglow Girls Club",
      category: "Women's Social & Business Community",
      cost: "Event Ticketed / Community",
      region: "Glasgow & Scotland",
      summary: "Connects women across Glasgow and Scotland through social, career, and business networking gatherings and multi-club events.",
      url: "https://www.glasglowgirlsclub.com/whats-on/",
      contact: "https://www.eventbrite.com/o/glasglow-girls-club-32770822147"
    },
    {
      name: "Lomond Business Network",
      category: "Regional & Women's Business Networking",
      cost: "Event / Membership",
      region: "Loch Lomond & West Scotland",
      summary: "Local business networking around Loch Lomond and Cameron House Hotel supporting regional founders, professionals, and women in business.",
      url: "http://www.lomondbusinessnetwork.co.uk/events",
      contact: "http://www.lomondbusinessnetwork.co.uk/events"
    }
  ];

  const HUBS = [
    {
      name: "Royal Bank Accelerator Glasgow",
      region: "Glasgow",
      address: "The Royal Bank of Scotland, 4th floor, 110 Queen St, Glasgow, G1 3BX",
      type: "Bank Accelerator & Co-working Hub",
      focus: "Early-stage and scaling founders, coaching, workshops, and peer community",
      url: "https://www.rbs.co.uk/business/business-services/entrepreneur-accelerator.html"
    },
    {
      name: "Royal Bank Accelerator Edinburgh",
      region: "Edinburgh",
      address: "142-144 Princes Street, Edinburgh, EH2 4EQ",
      type: "Bank Accelerator & Event Hub",
      focus: "Founders, investor readiness, marketing, and community events",
      url: "https://www.rbs.co.uk/business/business-services/entrepreneur-accelerator.html"
    },
    {
      name: "University of Edinburgh Accelerator Hub",
      region: "Edinburgh",
      address: "Edinburgh Futures Institute, 1 Lauriston Place, Edinburgh, EH3 9EF",
      type: "University & Accelerator Hub",
      focus: "Venture acceleration, research-led enterprise, and founder support",
      url: "https://www.rbs.co.uk/business/business-services/entrepreneur-accelerator.html"
    },
    {
      name: "Barclays Innovation Hub Glasgow",
      region: "Glasgow",
      address: "Beco Building, 58 Kingston Street, Glasgow, G5 8BP",
      type: "Innovation & Co-working Hub",
      focus: "Flexible workspace (Club Lite, Club, Resident, and private offices), community, and founder support",
      url: "https://labs.uk.barclays/locations/glasgow/"
    },
    {
      name: "CodeBase supported by Barclays Eagle Labs Edinburgh",
      region: "Edinburgh",
      address: "37a Castle Terrace, Edinburgh, EH1 2EL",
      type: "Tech & Innovation Ecosystem",
      focus: "Startups, scaleups, ecosystem programmes, and Barclays Eagle Labs connections",
      url: "https://labs.uk.barclays/locations/"
    },
    {
      name: "ONE SeedPod (Food & Drink Innovation Hub)",
      region: "Aberdeen / North East",
      address: "SRUC Craibstone Campus, Aberdeen (Tel: 01224 061100)",
      type: "Food & Drink Innovation Hub",
      focus: "Commercial kitchens, pilot plant, product development and demonstration kitchens, and leadership mentoring for food and drink businesses",
      url: "https://www.oneseedpod.com/"
    },
    {
      name: "Stirling Enterprise Park & Business Gateway Stirling",
      region: "Stirling & Central",
      address: "Stirling Enterprise Park, Players Road, Stirling, FK7 7RP & John Player Building, FK7 7RP",
      type: "Enterprise Park & Free Business Support",
      focus: "Commercial workspace, free one-to-one business advice, and workshops in Central Scotland",
      url: "https://www.bgateway.com/"
    },
    {
      name: "Lanarkshire Business Hub & Business Gateway Lanarkshire",
      region: "Lanarkshire",
      address: "New College Lanarkshire & Business Gateway Lanarkshire",
      type: "Regional Business Hub",
      focus: "Start-up support, skills, and local enterprise guidance across Lanarkshire",
      url: "https://www.bgateway.com/"
    }
  ];

  const STUDENT_SUPPORTS = [
    {
      name: "Converge",
      region: "All Scotland Universities",
      summary: "National academic enterprise programme working with Scotland's universities to support students, researchers, and recent graduates with training, mentoring, and challenge awards.",
      url: "https://www.convergechallenge.com/enterprise-support/"
    },
    {
      name: "University of Stirling Enterprise Programme & The Hive",
      region: "Stirling",
      summary: "Student enterprise support and collaboration space at the University of Stirling (contact: enterprise@stir.ac.uk).",
      url: "https://www.bgateway.com/"
    },
    {
      name: "Robert Gordon University (RGU) Startup Accelerator & AB Venture Zone",
      region: "Aberdeen",
      summary: "Supports student and graduate founders in Aberdeen with up to £10,000 funding support, mentoring, workspace via RGU Startup Accelerator, and AB Venture Zone links.",
      url: "https://www.scottish-enterprise.com/"
    },
    {
      name: "University of Glasgow Student Enterprise, Strathclyde Inspire & Edinburgh Innovations",
      region: "Glasgow & Edinburgh",
      summary: "University-led student enterprise programmes, The Enterprise Space, Strathclyde Inspire, and Edinburgh Innovations Student Enterprise & Launch Point.",
      url: "https://www.scottish-enterprise.com/"
    }
  ];

  const EVENTS = [
    {
      title: "Scottish Women in Business Events & Multi-Club Networking",
      format: "In-person & Online",
      audience: "Women Founders & Professionals",
      region: "Scotland",
      url: "https://www.scottishwomeninbusiness.org.uk/events/"
    },
    {
      title: "Glasglow Girls Club What's On & Gatherings",
      format: "In-person",
      audience: "Women in Glasgow & Scotland",
      region: "Glasgow",
      url: "https://www.glasglowgirlsclub.com/whats-on/"
    },
    {
      title: "Lomond Business Network Events",
      format: "In-person",
      audience: "Loch Lomond & Regional Businesses",
      region: "Loch Lomond",
      url: "http://www.lomondbusinessnetwork.co.uk/events"
    },
    {
      title: "Scottish Asian Business Chamber (SABC) Gatherings & Aspire Women's Network",
      format: "In-person & Peer Groups",
      audience: "Diverse Business Owners & Women Leaders",
      region: "Scotland",
      url: "https://www.asianbusinesschamber.scot/"
    },
    {
      title: "Scottish Asian Business Association (SABA) & SAWBA Women in Business",
      format: "Online & Regional",
      audience: "Asian Businesses, Women & Young Professionals",
      region: "Glasgow, Edinburgh, Aberdeen, Dundee, Inverness",
      url: "https://sabauk.org/"
    },
    {
      title: "FSB Scotland Webinars & Local Networking",
      format: "Online & Regional",
      audience: "Small Businesses & Self-Employed",
      region: "West, East/Mid/South & North Scotland",
      url: "https://www.fsb.org.uk/membership/support-near-you/scotland"
    }
  ];

  const STEPS_17 = [
    "Clarify your business idea, target customer problem, and value proposition.",
    "Check eligibility for 100% free support from Business Gateway Scotland.",
    "Research your market, competitors, and pricing in Scotland and the wider UK.",
    "Write a concise business plan and realistic 12 to 24 month cash flow forecast.",
    "Choose your legal structure (Sole Trader, Scottish Partnership, Limited Company SC number, or CIC).",
    "Register your business name and legal entity with Companies House or HMRC as required.",
    "Open a dedicated business bank account and review accounting/bookkeeping software.",
    "Arrange appropriate business insurance (public liability, employer liability if hiring, professional indemnity).",
    "Check licences, permits, planning permissions, or food/drink safety rules (such as via ONE SeedPod for food & drink).",
    "Set up data protection and UK GDPR compliance, privacy notices, and cookie consent.",
    "Build your website, clear service/product offering, and local SEO/GEO presence.",
    "Access 100% free mentoring through Business Gateway, enterprise agencies, or university hubs.",
    "Evaluate whether to add experienced non-executive advisors or board members, starting with free advice before exploring platforms like Connectd.",
    "Explore relevant grants, innovation programmes, or funding routes suited to your stage.",
    "Join regional and sector networks (such as FSB Scotland, Scottish Women in Business, Glasglow Girls Club, Lomond Business Network, SABC, or SABA).",
    "Track key metrics (revenue, gross margin, cash runway, customer retention) and review monthly.",
    "Scale sustainably with hiring, partnerships, or export support when unit economics are proven."
  ];

  const FAQS = [
    {
      q: "Is business support from Business Gateway Scotland free?",
      a: "Yes. Business Gateway is Scotland's publicly funded national business support service and provides 100% free one-to-one advice, start-up workshops, and practical guidance for people starting or running a business in Scotland."
    },
    {
      q: "Where are the Royal Bank Accelerator and Barclays hubs in Glasgow and Edinburgh?",
      a: "Royal Bank Accelerator hubs operate at 110 Queen St (4th floor), Glasgow, G1 3BX, and 142-144 Princes Street, Edinburgh, EH2 4EQ (plus the University of Edinburgh Accelerator Hub at Edinburgh Futures Institute, 1 Lauriston Place, EH3 9EF). Barclays Innovation Hub Glasgow is at Beco Building, 58 Kingston Street, Glasgow, G5 8BP, alongside CodeBase supported by Barclays Eagle Labs at 37a Castle Terrace, Edinburgh, EH1 2EL."
    },
    {
      q: "How do the Connectd links on Scotland Business Guide work?",
      a: "Scotland Business Guide may receive a referral commission if you sign up through our Connectd affiliate links for startups/businesses or talent/advisors. We always highlight 100% free public Scottish support options first so you can compare free advice with paid or commission-linked platforms."
    }
  ];

  function parseRoute() {
    const raw = window.location.pathname || "/";
    const clean = raw === "/" ? "/" : raw.replace(/\/+$/, "");
    if (clean === "" || clean === "/") return { view: "home", slug: null };
    if (clean.startsWith("/regions/")) {
      return { view: "region-detail", slug: clean.replace("/regions/", "") };
    }
    const map = {
      "/grants": "grants",
      "/start-business": "start-business",
      "/business-support": "business-support",
      "/mentors": "mentors",
      "/hubs": "hubs",
      "/networking": "networking",
      "/students": "students",
      "/regions": "regions",
      "/about": "about",
      "/suggest-resource": "suggest-resource",
      "/privacy": "privacy",
      "/terms": "terms",
      "/cookies": "cookies",
      "/affiliate-disclosure": "affiliate-disclosure",
      "/sitemap": "sitemap"
    };
    return { view: map[clean] || "home", slug: null };
  }

  function buildJsonLd(route) {
    const pageUrl = SITE.domain + (window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/+$/, ""));
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.domain + "/",
      "email": SITE.email,
      "areaServed": { "@type": "AdministrativeArea", "name": "Scotland" }
    };
    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE.name,
      "url": SITE.domain + "/"
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": route.view, "item": pageUrl }
      ]
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    };
    return [org, website, breadcrumb, faqSchema];
  }

  function updateSeo(route) {
    const titleMap = {
      "home": "Scotland Business Guide | Free Support, Grants, Hubs & Networks in Scotland",
      "grants": "Scottish Business Grants & Funding | Scotland Business Guide",
      "start-business": "17-Step Guide to Starting a Business in Scotland | Scotland Business Guide",
      "business-support": "Business Support, Chambers & Women's Networks | Scotland Business Guide",
      "mentors": "100% Free Mentoring, Board Advisors & Connectd | Scotland Business Guide",
      "hubs": "Scottish Business Hubs, Accelerators & ONE SeedPod | Scotland Business Guide",
      "networking": "Business Networking & Events Across Scotland | Scotland Business Guide",
      "students": "Student & Graduate Enterprise Support in Scotland | Scotland Business Guide",
      "regions": "Scottish Business Support by Region | Scotland Business Guide",
      "region-detail": "Regional Business Guide | Scotland Business Guide",
      "about": "About Scotland Business Guide",
      "suggest-resource": "Suggest a Business Resource | Scotland Business Guide",
      "privacy": "Privacy Policy | Scotland Business Guide",
      "terms": "Terms of Use | Scotland Business Guide",
      "cookies": "Cookie Policy | Scotland Business Guide",
      "affiliate-disclosure": "Affiliate Disclosure | Scotland Business Guide",
      "sitemap": "Sitemap & SEO/GEO Inspector | Scotland Business Guide"
    };
    const descMap = {
      "home": "Independent Scottish business support directory covering 100% free mentoring, Business Gateway, Scottish Enterprise, HIE, SOSE, Royal Bank and Barclays hubs, ONE SeedPod, FSB Scotland, women's networks, Asian business chambers, and student enterprise.",
      "mentors": "Access 100% free mentoring in Scotland first, learn how to bring experts onto your board or advisory panel, and view Connectd startup and talent referral links with clear disclosures."
    };
    document.title = titleMap[route.view] || titleMap.home;
    const desc = descMap[route.view] || descMap.home;
    const canonicalUrl = SITE.domain + (window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/+$/, ""));

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", desc);
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute("href", canonicalUrl);

    const ldEl = document.getElementById("dynamic-jsonld");
    if (ldEl) ldEl.textContent = JSON.stringify(buildJsonLd(route), null, 2);
  }

  function renderConnectdBox() {
    return `
      <div class="card highlight-connectd" style="margin-top:20px;">
        <div>
          <div class="badge-row">
            <span class="badge badge-connectd">CONNECTD REFERRAL PATHWAYS</span>
            <span class="badge badge-free">100% FREE PUBLIC MENTORING AVAILABLE FIRST</span>
          </div>
          <h3>Add Experts on Your Board, Get Advice &amp; Free Support to Start or Grow Your Business</h3>
          <p>Start with 100% free guidance and mentoring from Business Gateway Scotland, Scottish Enterprise, HIE, SOSE, or university enterprise hubs. When you are ready to source experienced board advisors, non-executive directors, investors, or specialist talent, compare options carefully and review roles, time commitments, and equity or fee expectations before committing.</p>
          <p><strong>Affiliate Disclosure:</strong> Scotland Business Guide may earn a referral commission if you join Connectd through the links below. Using these links helps keep this directory independent while public support via Business Gateway remains free.</p>
        </div>
        <div class="hero-actions">
          <a class="btn btn-pine" href="${SITE.connectdStartups}" target="_blank" rel="noopener noreferrer sponsored">Connectd for Startups &amp; Businesses</a>
          <a class="btn btn-secondary" href="${SITE.connectdTalent}" target="_blank" rel="noopener noreferrer sponsored">Connectd for Talent, Executives &amp; Advisors</a>
        </div>
      </div>
    `;
  }

  function renderHome() {
    return `
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <span class="hero-badge">Verified ${SITE.verified} | Free Public Support First</span>
            <h1>Practical Business Support, Free Mentoring &amp; Hubs Across Scotland</h1>
            <p>Scotland Business Guide helps founders, SMEs, students, and community enterprises find free advice, regional agencies, accelerators, food and drink facilities, FSB Scotland, women's networks, and Asian business chambers.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="/mentors" data-route="/mentors">100% Free Mentoring &amp; Board Advice</a>
              <a class="btn btn-outline-light" href="/hubs" data-route="/hubs">Explore Hubs &amp; Accelerators</a>
              <a class="btn btn-outline-light" href="/start-business" data-route="/start-business">17-Step Start-Up Guide</a>
            </div>
          </div>
          <div class="hero-card">
            <img src="${PHOTOS.hero}" alt="Scottish landscape representing enterprise and regional support across Scotland">
            <div class="badge-row">
              <span class="badge badge-free">100% FREE MENTORING</span>
              <span class="badge badge-verified">Last Verified: ${SITE.verified}</span>
            </div>
            <strong>Quick Navigation</strong>
            <ul class="meta-list" style="margin-top:8px;">
              <li><a href="/grants" data-route="/grants">Grants &amp; Funding Routes</a></li>
              <li><a href="/business-support" data-route="/business-support">Agencies, FSB Scotland, Women's &amp; Asian Chambers</a></li>
              <li><a href="/networking" data-route="/networking">Events &amp; Networks Around Scotland</a></li>
              <li><a href="/students" data-route="/students">Student &amp; Graduate Support</a></li>
            </ul>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="tldr-box">
          <div class="tldr-title">TL;DR: Where to Start in Scotland</div>
          <p style="margin:0;">For 100% free one-to-one business advice and workshops anywhere in Scotland, start with <a href="https://www.bgateway.com/" target="_blank" rel="noopener noreferrer">Business Gateway</a> alongside your regional agency (<a href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer">Scottish Enterprise</a>, <a href="https://www.hie.co.uk/" target="_blank" rel="noopener noreferrer">HIE</a>, or <a href="https://www.southofscotlandenterprise.com/" target="_blank" rel="noopener noreferrer">SOSE</a>). For physical workspaces, accelerators, food and drink kitchens, events, and board/advisor connections, browse our dedicated sections below.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <h2>100% Free Mentoring &amp; Board Advisory Support</h2>
              <p>Free mentoring comes first; explore structured board and advisor connections when scaling.</p>
            </div>
            <a class="btn btn-secondary" href="/mentors" data-route="/mentors">All Mentoring Details</a>
          </div>
          <div class="grid-3">
            <div class="card highlight-free">
              <div>
                <div class="badge-row"><span class="badge badge-free">100% FREE MENTORING</span></div>
                <h3>Business Gateway 1-to-1 Advisers</h3>
                <p>Free start-up and growth guidance, financial planning reviews, market research tools, and local workshops across Scotland.</p>
              </div>
              <a class="btn btn-pine" href="https://www.bgateway.com/" target="_blank" rel="noopener noreferrer">Visit Business Gateway</a>
            </div>
            <div class="card highlight-free">
              <div>
                <div class="badge-row"><span class="badge badge-free">100% FREE MENTORING</span></div>
                <h3>Enterprise Agencies &amp; Converge</h3>
                <p>Specialist growth, innovation, and academic enterprise mentoring via Scottish Enterprise, HIE, SOSE, and Converge.</p>
              </div>
              <a class="btn btn-pine" href="https://www.convergechallenge.com/enterprise-support/" target="_blank" rel="noopener noreferrer">Explore Converge Support</a>
            </div>
            <div class="card highlight-connectd">
              <div>
                <div class="badge-row"><span class="badge badge-connectd">CONNECTD AFFILIATE</span></div>
                <h3>Add Board Experts &amp; Advisors</h3>
                <p>Connect with experienced advisors, board members, and talent via Connectd (referral link with affiliate disclosure).</p>
              </div>
              <a class="btn btn-primary" href="${SITE.connectdStartups}" target="_blank" rel="noopener noreferrer sponsored">Connectd for Startups</a>
            </div>
          </div>
          ${renderConnectdBox()}
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="section-header">
            <div>
              <h2>Women's Networks, Asian Business Chambers &amp; FSB Scotland</h2>
              <p>Working links to communities, chambers, and membership bodies across Scotland.</p>
            </div>
            <a class="btn btn-secondary" href="/business-support" data-route="/business-support">Full Support Directory</a>
          </div>
          <div class="grid-3">
            <div class="card">
              <img class="card-photo" src="${PHOTOS.womenNetwork}" alt="Women founders and professionals networking in Scotland">
              <div>
                <div class="badge-row"><span class="badge badge-women">WOMEN'S NETWORKS</span></div>
                <h3>Scottish Women in Business, Glasglow Girls Club &amp; Lomond Business Network</h3>
                <p>Connect through <a href="https://www.scottishwomeninbusiness.org.uk/events/" target="_blank" rel="noopener noreferrer">Scottish Women in Business</a>, <a href="https://www.glasglowgirlsclub.com/whats-on/" target="_blank" rel="noopener noreferrer">Glasglow Girls Club</a>, and <a href="http://www.lomondbusinessnetwork.co.uk/events" target="_blank" rel="noopener noreferrer">Lomond Business Network</a> around Loch Lomond.</p>
              </div>
              <a class="btn btn-heather" href="/networking" data-route="/networking">Browse Events</a>
            </div>
            <div class="card">
              <img class="card-photo" src="${PHOTOS.chamberNetwork}" alt="Business chamber leaders and entrepreneurs meeting">
              <div>
                <div class="badge-row"><span class="badge badge-asian">ASIAN BUSINESS NETWORKS</span></div>
                <h3>Scottish Asian Business Chamber &amp; Scottish Asian Business Association (SABA CIC)</h3>
                <p>Explore <a href="https://www.asianbusinesschamber.scot/" target="_blank" rel="noopener noreferrer">Scottish Asian Business Chamber</a> and <a href="https://sabauk.org/" target="_blank" rel="noopener noreferrer">SABA CIC</a> (SC840174), including SAWBA Women in Business monthly online networking and first-year free individual membership terms.</p>
              </div>
              <a class="btn btn-secondary" href="/business-support" data-route="/business-support">View Chamber Details</a>
            </div>
            <div class="card">
              <img class="card-photo" src="${PHOTOS.hubs}" alt="Modern Scottish enterprise workspace and accelerator hub">
              <div>
                <div class="badge-row"><span class="badge badge-region">HUBS &amp; FSB SCOTLAND</span></div>
                <h3>Royal Bank Accelerator, Barclays Hubs, ONE SeedPod &amp; FSB</h3>
                <p>Includes Royal Bank Accelerator Glasgow (110 Queen St) &amp; Edinburgh (142-144 Princes St), Barclays Innovation Hub Glasgow (58 Kingston St), ONE SeedPod in Aberdeen, and <a href="https://www.fsb.org.uk/membership/support-near-you/scotland" target="_blank" rel="noopener noreferrer">FSB Scotland</a>.</p>
              </div>
              <a class="btn btn-pine" href="/hubs" data-route="/hubs">View All Hubs</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          ${FAQS.map(f => `
            <details class="faq-item">
              <summary>${f.q}</summary>
              <p>${f.a}</p>
            </details>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderGrants() {
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span><span class="badge badge-free">FREE ADVICE AVAILABLE</span></div>
          <h1>Scottish Business Grants &amp; Funding Routes</h1>
          <p>Grant availability in Scotland depends on business location, sector, innovation scope, and eligibility criteria. Always check official portals directly before applying and speak with a free Business Gateway adviser to match your project to current schemes.</p>
          <div class="grid-3" style="margin-top:20px;">
            <div class="card">
              <img class="card-photo" src="${PHOTOS.grants}" alt="Financial planning and grant evaluation desk">
              <div>
                <h3>Business Gateway Funding Signposting</h3>
                <p>Free guidance on local authority grants, start-up support, and growth funding options across Scotland.</p>
              </div>
              <a class="btn btn-pine" href="https://www.bgateway.com/" target="_blank" rel="noopener noreferrer">Business Gateway</a>
            </div>
            <div class="card">
              <div>
                <h3>Scottish Enterprise, HIE &amp; SOSE</h3>
                <p>Regional economic development agencies offering strategic support, innovation guidance, and qualifying business programmes.</p>
              </div>
              <a class="btn btn-secondary" href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer">Scottish Enterprise</a>
            </div>
            <div class="card">
              <div>
                <h3>University &amp; Student Enterprise Awards</h3>
                <p> programmes such as Converge and RGU Startup Accelerator (up to £10,000 support, mentoring, and workspace) back student and academic founders.</p>
              </div>
              <a class="btn btn-secondary" href="/students" data-route="/students">Student Support</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderStartBusiness() {
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span><span class="badge badge-free">17-STEP ROADMAP</span></div>
          <h1>17-Step Guide to Starting a Business in Scotland</h1>
          <p>A structured checklist for founders launching in Scotland, from initial idea validation and free Business Gateway mentoring to compliance and growth.</p>
          <img class="card-photo" style="height:220px;margin:18px 0;" src="${PHOTOS.startup}" alt="Entrepreneurs collaborating on a new Scottish business plan">
          ${STEPS_17.map((step, idx) => `
            <div class="step-item">
              <div class="step-num">${idx + 1}</div>
              <div><strong>Step ${idx + 1}</strong><p style="margin:4px 0 0;color:var(--muted);">${step}</p></div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderBusinessSupport() {
    const q = (document.getElementById("support-search")?.value || "").toLowerCase().trim();
    const cat = document.getElementById("support-cat")?.value || "all";
    const filtered = SUPPORT_ORGS.filter(o => {
      const matchCat = cat === "all" || o.category.toLowerCase().includes(cat.toLowerCase());
      const matchText = !q || (o.name + " " + o.category + " " + o.region + " " + o.summary).toLowerCase().includes(q);
      return matchCat && matchText;
    });

    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span><span class="badge badge-free">100% FREE PUBLIC SUPPORT INCLUDED</span></div>
          <h1>Scottish Business Support, FSB, Women's Networks &amp; Asian Chambers</h1>
          <p>Search verified public agencies, Federation of Small Businesses (FSB) Scotland, Scottish Asian Business Association (SABA CIC), Scottish Asian Business Chamber, Scottish Women in Business, Glasglow Girls Club, and Lomond Business Network.</p>

          <div class="filter-panel">
            <div class="field">
              <label for="support-search">Search organisations or regions</label>
              <input id="support-search" type="text" placeholder="e.g. SABA, FSB, Lomond, HIE, Glasgow..." value="${q}">
            </div>
            <div class="field">
              <label for="support-cat">Filter by category</label>
              <select id="support-cat">
                <option value="all" ${cat === "all" ? "selected" : ""}>All Categories</option>
                <option value="Public" ${cat === "Public" ? "selected" : ""}>Public &amp; Enterprise Agencies</option>
                <option value="FSB" ${cat === "FSB" ? "selected" : ""}>FSB Scotland</option>
                <option value="Asian" ${cat === "Asian" ? "selected" : ""}>Asian Business Networks &amp; Chambers</option>
                <option value="Women" ${cat === "Women" ? "selected" : ""}>Women's Business Networks</option>
              </select>
            </div>
          </div>

          <div class="grid-2">
            ${filtered.map(o => `
              <div class="card ${o.cost.includes("100% Free") ? "highlight-free" : ""}">
                <div>
                  <div class="badge-row">
                    <span class="badge badge-region">${o.category}</span>
                    <span class="badge badge-free">${o.cost}</span>
                  </div>
                  <h3>${o.name}</h3>
                  <p>${o.summary}</p>
                  <ul class="meta-list">
                    <li><strong>Region:</strong> ${o.region}</li>
                  </ul>
                </div>
                <div class="hero-actions">
                  <a class="btn btn-pine" href="${o.url}" target="_blank" rel="noopener noreferrer">Official Website</a>
                  <a class="btn btn-secondary" href="${o.contact}" target="_blank" rel="noopener noreferrer">Details / Contact</a>
                </div>
              </div>
            `).join("")}
          </div>
          ${renderConnectdBox()}
        </div>
      </section>
    `;
  }

  function renderMentors() {
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-free">100% FREE MENTORING FIRST</span><span class="badge badge-verified">Last Verified: ${SITE.verified}</span></div>
          <h1>100% Free Mentoring &amp; Adding Experts to Your Board</h1>
          <p>Every Scottish founder and SME can access 100% free mentoring and business guidance through public and university programmes before taking on paid or equity-linked board advisors.</p>

          <div class="grid-2" style="margin-top:18px;">
            <div class="card highlight-free">
              <div>
                <div class="badge-row"><span class="badge badge-free">100% FREE MENTORING</span></div>
                <h3>Business Gateway Scotland Free Mentoring &amp; Advice</h3>
                <p>Publicly funded one-to-one support, business plan feedback, and workshops at zero cost to eligible Scottish businesses.</p>
              </div>
              <a class="btn btn-pine" href="https://www.bgateway.com/" target="_blank" rel="noopener noreferrer">Access Free Business Gateway Support</a>
            </div>
            <div class="card highlight-free">
              <div>
                <div class="badge-row"><span class="badge badge-free">100% FREE MENTORING</span></div>
                <h3>Enterprise Agencies &amp; University Mentoring</h3>
                <p>Guidance through Scottish Enterprise, Highlands and Islands Enterprise (HIE), South of Scotland Enterprise (SOSE), and Converge.</p>
              </div>
              <a class="btn btn-pine" href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer">Explore Agency Support</a>
            </div>
          </div>

          ${renderConnectdBox()}
        </div>
      </section>
    `;
  }

  function renderHubs() {
    const q = (document.getElementById("hub-search")?.value || "").toLowerCase().trim();
    const reg = document.getElementById("hub-region")?.value || "all";
    const items = HUBS.filter(h => {
      const mReg = reg === "all" || h.region.toLowerCase().includes(reg.toLowerCase());
      const mQ = !q || (h.name + " " + h.region + " " + h.address + " " + h.focus).toLowerCase().includes(q);
      return mReg && mQ;
    });

    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span></div>
          <h1>Search Scottish Business Hubs, Accelerators &amp; ONE SeedPod</h1>
          <p>Includes Royal Bank Accelerator hubs in Glasgow and Edinburgh, Barclays Innovation Hub Glasgow, CodeBase supported by Barclays Eagle Labs Edinburgh, ONE SeedPod for food and drink businesses near Aberdeen, Stirling Enterprise Park, and Lanarkshire Business Hub.</p>

          <div class="grid-2" style="margin:18px 0;">
            <div class="card">
              <img class="card-photo" src="${PHOTOS.hubs}" alt="Glasgow and Edinburgh accelerator and innovation hubs">
              <div>
                <h3>Royal Bank Accelerator &amp; Barclays Hubs (Glasgow &amp; Edinburgh)</h3>
                <p><strong>Glasgow Royal Bank Accelerator:</strong> The Royal Bank of Scotland, 4th floor, 110 Queen St, Glasgow, G1 3BX.<br>
                <strong>Edinburgh Royal Bank Accelerator:</strong> 142-144 Princes Street, Edinburgh, EH2 4EQ (plus University of Edinburgh Accelerator Hub at Edinburgh Futures Institute, 1 Lauriston Place, EH3 9EF).<br>
                <strong>Barclays Innovation Hub Glasgow:</strong> Beco Building, 58 Kingston Street, Glasgow, G5 8BP.<br>
                <strong>CodeBase supported by Barclays Eagle Labs Edinburgh:</strong> 37a Castle Terrace, Edinburgh, EH1 2EL.</p>
              </div>
              <a class="btn btn-pine" href="https://www.rbs.co.uk/business/business-services/entrepreneur-accelerator.html" target="_blank" rel="noopener noreferrer">Royal Bank Accelerator</a>
            </div>
            <div class="card">
              <img class="card-photo" src="${PHOTOS.foodDrink}" alt="Food and drink product development and commercial kitchen">
              <div>
                <h3>ONE SeedPod (Food &amp; Drink), Stirling &amp; Lanarkshire</h3>
                <p><strong>ONE SeedPod:</strong> Scotland's Food &amp; Drink Innovation Hub on the SRUC Craibstone Campus near Aberdeen (Tel: 01224 061100) with commercial, pilot, product development, and demonstration kitchens plus leadership mentoring.<br>
                <strong>Stirling:</strong> Stirling Enterprise Park, Players Road, Stirling, FK7 7RP &amp; Business Gateway Stirling.<br>
                <strong>Lanarkshire:</strong> Lanarkshire Business Hub (New College Lanarkshire) &amp; Business Gateway Lanarkshire.</p>
              </div>
              <a class="btn btn-secondary" href="https://www.oneseedpod.com/" target="_blank" rel="noopener noreferrer">Visit ONE SeedPod</a>
            </div>
          </div>

          <div class="filter-panel">
            <div class="field">
              <label for="hub-search">Search hubs by name, street, or focus</label>
              <input id="hub-search" type="text" placeholder="e.g. Queen St, Princes St, Kingston, SeedPod, Stirling..." value="${q}">
            </div>
            <div class="field">
              <label for="hub-region">Filter by location</label>
              <select id="hub-region">
                <option value="all" ${reg === "all" ? "selected" : ""}>All Locations</option>
                <option value="Glasgow" ${reg === "Glasgow" ? "selected" : ""}>Glasgow</option>
                <option value="Edinburgh" ${reg === "Edinburgh" ? "selected" : ""}>Edinburgh</option>
                <option value="Aberdeen" ${reg === "Aberdeen" ? "selected" : ""}>Aberdeen / North East (ONE SeedPod)</option>
                <option value="Stirling" ${reg === "Stirling" ? "selected" : ""}>Stirling &amp; Central</option>
                <option value="Lanarkshire" ${reg === "Lanarkshire" ? "selected" : ""}>Lanarkshire</option>
              </select>
            </div>
          </div>

          <div class="grid-2">
            ${items.map(h => `
              <div class="card">
                <div>
                  <div class="badge-row"><span class="badge badge-region">${h.region}</span><span class="badge badge-verified">${h.type}</span></div>
                  <h3>${h.name}</h3>
                  <p>${h.focus}</p>
                  <ul class="meta-list">
                    <li><strong>Address / Location:</strong> ${h.address}</li>
                  </ul>
                </div>
                <a class="btn btn-pine" href="${h.url}" target="_blank" rel="noopener noreferrer">Official Hub Link</a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderNetworking() {
    const q = (document.getElementById("event-search")?.value || "").toLowerCase().trim();
    const list = EVENTS.filter(e => !q || (e.title + " " + e.format + " " + e.audience + " " + e.region).toLowerCase().includes(q));

    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span><span class="badge badge-free">FREE PUBLIC WEBINARS &amp; WORKSHOPS AVAILABLE</span></div>
          <h1>Find Business, Women's, Asian Chamber &amp; Regional Events Around Scotland</h1>
          <p>Working links to events and communities including Scottish Women in Business, Glasglow Girls Club, Lomond Business Network, Scottish Asian Business Chamber, Scottish Asian Business Association (SABA CIC) &amp; SAWBA Women in Business, and FSB Scotland.</p>

          <div class="filter-panel">
            <div class="field">
              <label for="event-search">Search events or areas around Scotland</label>
              <input id="event-search" type="text" placeholder="e.g. Women, Glasgow, Lomond, Asian, SABA, FSB..." value="${q}">
            </div>
          </div>

          <div class="grid-2">
            ${list.map(ev => `
              <div class="card">
                <div>
                  <div class="badge-row"><span class="badge badge-region">${ev.region}</span><span class="badge badge-verified">${ev.format}</span></div>
                  <h3>${ev.title}</h3>
                  <p><strong>Audience:</strong> ${ev.audience}</p>
                </div>
                <a class="btn btn-pine" href="${ev.url}" target="_blank" rel="noopener noreferrer">Open Event / Network Page</a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderStudents() {
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span><span class="badge badge-free">STUDENT &amp; GRADUATE ENTERPRISE</span></div>
          <h1>Student &amp; Graduate Business Support in Scotland</h1>
          <p>Dedicated enterprise programmes, mentoring, funding awards, and workspaces for university and college students and recent graduates across Scotland.</p>
          <img class="card-photo" style="height:210px;margin:18px 0;" src="${PHOTOS.students}" alt="Students collaborating on enterprise ideas">
          <div class="grid-2">
            ${STUDENT_SUPPORTS.map(s => `
              <div class="card">
                <div>
                  <div class="badge-row"><span class="badge badge-region">${s.region}</span></div>
                  <h3>${s.name}</h3>
                  <p>${s.summary}</p>
                </div>
                <a class="btn btn-pine" href="${s.url}" target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            `).join("")}
          </div>
          ${renderConnectdBox()}
        </div>
      </section>
    `;
  }

  function renderRegions() {
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-verified">Last Verified: ${SITE.verified}</span></div>
          <h1>Scottish Business Support by Region</h1>
          <p>Interactive regional directory map and guides across Scotland, including Glasgow, Edinburgh, Aberdeen &amp; North East, Dundee &amp; Tayside, Highlands &amp; Islands (including Loch Lomond), South of Scotland, Stirling &amp; Central, and Lanarkshire &amp; Ayrshire.</p>

          <div class="map-box">
            <strong>Interactive Scotland Regional Directory Map</strong>
            <div class="map-grid">
              ${REGIONS.map(r => `
                <div class="map-pin">
                  <div style="font-weight:800;color:var(--pine-dark);">${r.name}</div>
                  <p style="font-size:0.86rem;color:var(--muted);margin:6px 0 10px;">${r.summary}</p>
                  <a class="btn btn-secondary" href="/regions/${r.slug}" data-route="/regions/${r.slug}">Open Regional Guide</a>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="grid-2">
            ${REGIONS.map(r => `
              <div class="card">
                <div>
                  <h3>${r.name}</h3>
                  <p>${r.summary}</p>
                  <ul class="meta-list">
                    ${r.highlights.map(h => `<li>${h}</li>`).join("")}
                  </ul>
                </div>
                <a class="btn btn-pine" href="/regions/${r.slug}" data-route="/regions/${r.slug}">View ${r.name}</a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderRegionDetail(slug) {
    const reg = REGIONS.find(r => r.slug === slug) || REGIONS[0];
    return `
      <section class="section">
        <div class="container">
          <div class="badge-row"><span class="badge badge-region">${reg.name}</span><span class="badge badge-verified">Last Verified: ${SITE.verified}</span></div>
          <h1>${reg.name} Business Guide</h1>
          <p>${reg.summary}</p>
          <div class="card" style="margin:18px 0;">
            <h3>Key Local Support, Hubs &amp; Networks</h3>
            <ul class="meta-list">
              ${reg.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
            <div class="hero-actions">
              <a class="btn btn-pine" href="https://www.bgateway.com/" target="_blank" rel="noopener noreferrer">Free Business Gateway Support</a>
              <a class="btn btn-secondary" href="/regions" data-route="/regions">All Scottish Regions</a>
            </div>
          </div>
          ${renderConnectdBox()}
        </div>
      </section>
    `;
  }

  function renderAbout() {
    return `
      <section class="section">
        <div class="container">
          <h1>About Scotland Business Guide</h1>
          <p>Scotland Business Guide (<strong>${SITE.domain}</strong>) is an independent directory designed to help entrepreneurs, SMEs, students, and community groups across Scotland navigate free public business support, regional agencies, accelerators, food and drink facilities, FSB Scotland, women's networks, and Asian business chambers.</p>
          <p>Contact: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
          ${renderConnectdBox()}
        </div>
      </section>
    `;
  }

  function renderSuggestResource() {
    return `
      <section class="section">
        <div class="container">
          <h1>Suggest a Scottish Business Resource</h1>
          <p>Know a Scottish business hub, free mentoring scheme, event series, student programme, or regional network we should review? Submit details below or email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
          <form id="suggest-form" class="card" style="max-width:680px;gap:14px;">
            <div class="field">
              <label for="res-name">Organisation, Hub, or Event Name</label>
              <input id="res-name" type="text" required placeholder="e.g. Example Scotland Enterprise Hub">
            </div>
            <div class="field">
              <label for="res-url">Official Website URL</label>
              <input id="res-url" type="url" required placeholder="https://example.org.uk">
            </div>
            <div class="field">
              <label for="res-region">Scottish Region</label>
              <input id="res-region" type="text" required placeholder="e.g. Glasgow, Edinburgh, Aberdeen, Stirling, Lanarkshire">
            </div>
            <div class="field">
              <label for="res-notes">Notes (cost, free mentoring availability, address, or audience)</label>
              <textarea id="res-notes" rows="4" placeholder="Share helpful context for verification..."></textarea>
            </div>
            <button type="submit" class="btn btn-pine">Prepare Submission Summary</button>
            <div id="suggest-status" style="font-weight:700;color:var(--pine-dark);"></div>
          </form>
        </div>
      </section>
    `;
  }

  function renderLegal(type) {
    if (type === "privacy") {
      return `
        <section class="section">
          <div class="container">
            <h1>Privacy Policy</h1>
            <p>Scotland Business Guide respects UK GDPR and data protection principles. We do not sell personal data. For privacy enquiries, contact <a href="mailto:${SITE.privacyEmail}">${SITE.privacyEmail}</a>.</p>
          </div>
        </section>
      `;
    }
    if (type === "terms") {
      return `
        <section class="section">
          <div class="container">
            <h1>Terms of Use</h1>
            <p>Information on Scotland Business Guide is provided for general guidance and signposting. Always verify eligibility, dates, addresses, and membership pricing directly with the relevant provider before making financial or legal commitments.</p>
          </div>
        </section>
      `;
    }
    if (type === "cookies") {
      return `
        <section class="section">
          <div class="container">
            <h1>Cookie Policy</h1>
            <p>Scotland Business Guide stores your cookie consent choice locally in your browser so your preference is remembered. You can reopen or update your consent preferences anytime.</p>
            <button type="button" id="open-cookie-btn" class="btn btn-pine">Manage Cookie Preferences</button>
          </div>
        </section>
      `;
    }
    return `
      <section class="section">
        <div class="container">
          <h1>Affiliate Disclosure</h1>
          <p>Scotland Business Guide prioritises 100% free public Scottish business support first. Some external links, including our Connectd referral links (<a href="${SITE.connectdStartups}" target="_blank" rel="noopener noreferrer sponsored">Startups &amp; Businesses</a> and <a href="${SITE.connectdTalent}" target="_blank" rel="noopener noreferrer sponsored">Talent, Executives &amp; Advisors</a>), are affiliate links that may generate a referral commission at no extra cost to you.</p>
        </div>
      </section>
    `;
  }

  function renderSitemap() {
    const route = parseRoute();
    return `
      <section class="section">
        <div class="container">
          <h1>Sitemap &amp; SEO / GEO Inspector</h1>
          <p>All pages on <strong>${SITE.domain}</strong>, structured JSON-LD data, and XML sitemap / <code>robots.txt</code> preview.</p>
          <div class="grid-2" style="margin-bottom:20px;">
            <div class="card">
              <h3>Site Routes</h3>
              <ul class="meta-list">
                <li><a href="/" data-route="/">Home</a></li>
                <li><a href="/grants" data-route="/grants">Grants &amp; Funding</a></li>
                <li><a href="/start-business" data-route="/start-business">17-Step Start-Up Guide</a></li>
                <li><a href="/business-support" data-route="/business-support">Business Support &amp; Chambers</a></li>
                <li><a href="/mentors" data-route="/mentors">Free Mentors &amp; Board Support</a></li>
                <li><a href="/hubs" data-route="/hubs">Hubs &amp; Accelerators</a></li>
                <li><a href="/networking" data-route="/networking">Networking &amp; Events</a></li>
                <li><a href="/students" data-route="/students">Students &amp; Graduates</a></li>
                <li><a href="/regions" data-route="/regions">Regions</a></li>
                <li><a href="/suggest-resource" data-route="/suggest-resource">Suggest a Resource</a></li>
              </ul>
            </div>
            <div class="card">
              <h3>Active JSON-LD Schema</h3>
              <pre class="inspector-code">${JSON.stringify(buildJsonLd(route), null, 2)}</pre>
            </div>
          </div>
          <div class="grid-2">
            <div class="card">
              <h3>sitemap.xml</h3>
              <pre class="inspector-code">${sitemapXmlPreview}</pre>
            </div>
            <div class="card">
              <h3>robots.txt</h3>
              <pre class="inspector-code">User-agent: *
Allow: /
Sitemap: ${SITE.domain}/sitemap.xml</pre>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  const sitemapXmlPreview = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE.domain}/</loc></url>
  <url><loc>${SITE.domain}/mentors</loc></url>
  <url><loc>${SITE.domain}/hubs</loc></url>
  <url><loc>${SITE.domain}/business-support</loc></url>
  <url><loc>${SITE.domain}/networking</loc></url>
  <url><loc>${SITE.domain}/students</loc></url>
  <url><loc>${SITE.domain}/regions</loc></url>
</urlset>`;

  function renderApp() {
    const route = parseRoute();
    updateSeo(route);
    const main = document.getElementById("main-content");
    if (!main) return;

    const views = {
      "home": () => renderHome(),
      "grants": () => renderGrants(),
      "start-business": () => renderStartBusiness(),
      "business-support": () => renderBusinessSupport(),
      "mentors": () => renderMentors(),
      "hubs": () => renderHubs(),
      "networking": () => renderNetworking(),
      "students": () => renderStudents(),
      "regions": () => renderRegions(),
      "region-detail": () => renderRegionDetail(route.slug),
      "about": () => renderAbout(),
      "suggest-resource": () => renderSuggestResource(),
      "privacy": () => renderLegal("privacy"),
      "terms": () => renderLegal("terms"),
      "cookies": () => renderLegal("cookies"),
      "affiliate-disclosure": () => renderLegal("affiliate-disclosure"),
      "sitemap": () => renderSitemap()
    };

    main.innerHTML = (views[route.view] || views.home)();

    document.querySelectorAll(".nav-link").forEach(a => {
      const target = a.getAttribute("data-route");
      a.classList.toggle("active", target === window.location.pathname || (target === "/" && window.location.pathname === "/"));
    });

    ["support-search", "support-cat", "hub-search", "hub-region", "event-search"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => renderApp());
        el.addEventListener("change", () => renderApp());
      }
    });

    const form = document.getElementById("suggest-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("res-name").value;
        const url = document.getElementById("res-url").value;
        const status = document.getElementById("suggest-status");
        status.textContent = "Submission prepared for " + name + " (" + url + "). Send details to " + SITE.email + " to add to review queue.";
      });
    }

    const openCookieBtn = document.getElementById("open-cookie-btn");
    if (openCookieBtn) {
      openCookieBtn.addEventListener("click", () => {
        const banner = document.getElementById("cookie-banner");
        if (banner) banner.classList.add("show");
      });
    }
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[data-route]");
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const href = link.getAttribute("data-route");
    window.history.pushState({}, "", href);
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("popstate", renderApp);

  document.addEventListener("DOMContentLoaded", function () {
    const consentKey = "sbg_cookie_consent_v1";
    const banner = document.getElementById("cookie-banner");
    if (banner && !localStorage.getItem(consentKey)) {
      banner.classList.add("show");
    }
    const acceptBtn = document.getElementById("cookie-accept");
    const rejectBtn = document.getElementById("cookie-reject");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", () => {
        localStorage.setItem(consentKey, "accepted");
        banner.classList.remove("show");
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", () => {
        localStorage.setItem(consentKey, "essential-only");
        banner.classList.remove("show");
      });
    }
    renderApp();
  });
})();
