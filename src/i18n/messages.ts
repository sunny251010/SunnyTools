import { defaultLocale, type Locale } from "./config";

export const messages = {
  en: {
    site: {
      defaultTitle: "SunnyTools - Free Online Tools",
      defaultDescription:
        "Fast, private, browser-based tools for text, developers, generators, conversions, and calculators.",
      footerDescription:
        "Fast, private, browser-based utilities built for everyday writing, development, and calculation tasks.",
      copyright: "All rights reserved.",
      homeAria: "SunnyTools home",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      openNavigation: "Open navigation",
      footerNavigation: "Footer"
    },
    nav: {
      home: "Home",
      allTools: "All Tools",
      textTools: "Text Tools",
      developerTools: "Developer Tools",
      generatorTools: "Generator Tools",
      about: "About",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      terms: "Terms"
    },
    common: {
      searchTools: "Search tools",
      browseAllTools: "Browse all tools",
      activeNow: "active now",
      totalTools: "total tools",
      tools: "tools",
      tool: "tool",
      toolsShown: "shown",
      noToolsFound: "No tools found.",
      noMatchingTools: "No matching tools found.",
      allCategories: "All categories",
      filterByCategory: "Filter by category",
      openTool: "Open tool",
      planned: "Planned",
      general: "General",
      language: "Language",
      searchPlaceholder: "Search by name, keyword, or task",
      homeSearchPlaceholder: "Search for a tool"
    },
    home: {
      title: "Free Online Tools",
      description:
        "Use fast, private, browser-based tools for text, developers, generators, conversions, and calculators.",
      eyebrow: "Free online utilities",
      heading: "Fast browser-based tools for everyday work.",
      lead:
        "Count text, generate values, format developer data, and run quick conversions without sending your input to a server.",
      popularEyebrow: "Popular",
      popularTitle: "Popular tools",
      popularDescription:
        "Start with the tools people reach for most often, including the browser-ready Text Counter.",
      categoriesEyebrow: "Categories",
      categoriesTitle: "Browse by category",
      categoriesDescription:
        "Each category groups related tools with static URLs ready for SEO and internal linking."
    },
    toolsIndex: {
      title: "All Tools",
      description: "Browse every active and planned SunnyTools utility from one searchable directory.",
      eyebrow: "Tool directory",
      heading: "All Tools",
      lead: "Search active and planned browser-based tools from a single source of truth.",
      availableTitle: "Available now",
      availableDescription: "These tools are implemented and ready to run completely in the browser."
    },
    categoryPage: {
      eyebrow: "Category",
      collectionSuffix: "collection",
      descriptionSuffix: "Browse free browser-based",
      sectionDescription: "Each tool has its own URL and runs directly in the browser.",
      guideTitle: "What this category helps with",
      useCasesTitle: "Common use cases",
      tipsTitle: "Practical tips"
    },
    toolPage: {
      breadcrumbHome: "Home",
      breadcrumbAllTools: "All Tools",
      fallbackCategory: "Tool",
      faq: "FAQ",
      whatIs: "What is {tool}?",
      howToUse: "How to use it",
      howItWorks: "How it works",
      privacy: "Is data saved?",
      relatedTitle: "Related tools",
      relatedDescription: "Tools in the same category that are planned or ready to use."
    },
    pages: {
      about: {
        title: "About",
        description: "Learn about the SunnyTools project and its static-first architecture.",
        eyebrow: "About",
        heading: "SunnyTools is a growing collection of fast online tools.",
        paragraphs: [
          "The project starts with a static-first foundation, shared data files, reusable layouts, and browser-only tools. The goal is to keep pages fast, private, easy to maintain, and simple to deploy."
        ],
        sections: [
          {
            title: "Project principles",
            body: "Tool pages should load quickly, solve one job clearly, avoid unnecessary dependencies, and keep user input on the device whenever possible."
          }
        ]
      },
      contact: {
        title: "Contact",
        description: "Contact the SunnyTools team for feedback, requests, and support.",
        eyebrow: "Contact",
        heading: "Contact SunnyTools",
        paragraphs: [
          "For feedback, bug reports, or new tool ideas, send a note to sunny.contact.251010@gmail.com."
        ],
        sections: [
          {
            title: "Tool requests",
            body: "Include the tool name, expected inputs, expected outputs, and any privacy or SEO considerations that should guide the implementation."
          }
        ]
      },
      privacyPolicy: {
        title: "Privacy Policy",
        description: "Read the SunnyTools privacy policy for browser-based tools.",
        eyebrow: "Privacy Policy",
        heading: "Privacy Policy",
        paragraphs: [
          "SunnyTools is designed so the initial tools run in the browser. The Word Counter does not send text to a backend, database, or third-party service."
        ],
        sections: [
          {
            title: "Analytics and advertising",
            body: "SunnyTools uses Google Analytics 4 to understand page views and general site usage. Tool input is still processed locally in the browser. Google AdSense is not connected yet."
          },
          {
            title: "Contact",
            body: "Questions about privacy can be sent to sunny.contact.251010@gmail.com."
          }
        ]
      },
      terms: {
        title: "Terms",
        description: "Read the basic terms for using SunnyTools.",
        eyebrow: "Terms",
        heading: "Terms of Use",
        paragraphs: [
          "SunnyTools provides browser-based utilities for general informational and productivity purposes. Review outputs before relying on them in production workflows."
        ],
        sections: [
          {
            title: "No warranty",
            body: "Tools are provided as-is. The project should add jurisdiction-specific legal language before a public production launch."
          }
        ]
      }
    },
    toolUi: {
      shared: {
        input: "Input",
        output: "Output",
        textInput: "Text input",
        copy: "Copy",
        copied: "Copied.",
        copiedToClipboard: "Copied to clipboard.",
        clear: "Clear",
        generate: "Generate",
        downloadPng: "Download PNG",
        downloadTxt: "Download TXT",
        downloadMd: "Download MD",
        downloadHtml: "Download HTML",
        downloadCss: "Download CSS",
        downloadJs: "Download JS",
        loadExample: "Load example",
        encode: "Encode",
        decode: "Decode",
        convert: "Convert",
        invalid: "Invalid"
      },
      wordCounter: {
        placeholder: "Paste or type your text here",
        words: "Words",
        characters: "Characters",
        charactersNoSpaces: "Characters without spaces",
        sentences: "Sentences",
        paragraphs: "Paragraphs",
        readingTime: "Reading time",
        minute: "min",
        minutes: "mins",
        copyFailed: "Copy failed. Select the text manually."
      },
      characterCounter: {
        placeholder: "Type or paste text",
        characterLimit: "Character limit",
        withoutSpaces: "Without spaces",
        lines: "Lines",
        remaining: "Remaining",
        usage: "Limit used",
        noLimit: "No limit"
      },
      caseConverter: {
        placeholder: "Type text to convert",
        upper: "UPPER",
        lower: "lower",
        title: "Title",
        sentence: "Sentence",
        kebab: "kebab-case",
        snake: "snake_case",
        camel: "camelCase",
        pascal: "PascalCase",
        constant: "CONSTANT_CASE",
        dot: "dot.case"
      },
      slug: {
        title: "Title or text",
        separator: "Separator",
        hyphen: "Hyphen",
        underscore: "Underscore",
        lowercase: "Lowercase",
        removeStopWords: "Remove stop words",
        generatedSlug: "Generated slug",
        generated: "Slug generated."
      },
      duplicateLines: {
        trimLines: "Trim lines",
        caseSensitive: "Case sensitive",
        skipEmpty: "Skip empty lines",
        uniqueLines: "Unique lines",
        duplicatesRemoved: "Duplicates removed",
        inputLines: "Input lines",
        processed: "Duplicates removed."
      },
      sortLines: {
        sortType: "Sort type",
        text: "Text",
        numeric: "Numeric",
        length: "Line length",
        direction: "Direction",
        ascending: "Ascending",
        descending: "Descending",
        trimLines: "Trim lines",
        skipEmpty: "Skip empty lines",
        uniqueOnly: "Unique only",
        sorted: "Lines sorted."
      },
      lineTools: {
        mode: "Line tool mode",
        removeDuplicates: "Remove duplicates",
        sortLines: "Sort lines",
        outputLines: "Output lines",
        linesRemoved: "Lines removed"
      },
      textCompare: {
        original: "Original text",
        changed: "Changed text",
        compare: "Compare",
        unchanged: "Unchanged",
        added: "Added",
        removed: "Removed",
        mode: "Mode",
        lineMode: "Line",
        wordMode: "Word",
        swap: "Swap",
        summary: "Summary",
        type: "Type",
        line: "Line",
        noDifference: "No line differences found."
      },
      markdown: {
        markdownInput: "Markdown input",
        preview: "Preview",
        copyMarkdown: "Copy Markdown",
        copyHtml: "Copy HTML",
        htmlCopied: "HTML copied.",
        rendered: "Preview rendered."
      },
      htmlFormatter: {
        htmlInput: "HTML input",
        indentSize: "Indent size",
        useTabs: "Use tabs",
        formatted: "HTML formatted.",
        invalid: "Enter valid HTML text."
      },
      minifier: {
        source: "Source",
        minified: "Minified",
        before: "Before",
        after: "After",
        saved: "Saved",
        keepComments: "Keep comments",
        minifiedStatus: "Minified locally.",
        invalidCss: "CSS has unmatched braces or unfinished strings.",
        invalidJs: "JavaScript has unfinished strings, comments, templates, or brackets."
      },
      lorem: {
        paragraphs: "Paragraphs",
        sentencesEach: "Sentences each",
        startClassic: "Start classic"
      },
      qr: {
        textOrUrl: "Text or URL",
        size: "Size",
        margin: "Margin",
        error: "Could not generate a QR code for this input."
      },
      password: {
        generatedPassword: "Generated password",
        length: "Length",
        lowercase: "Lowercase",
        uppercase: "Uppercase",
        numbers: "Numbers",
        symbols: "Symbols",
        selectSet: "Select at least one character set.",
        generated: "Password generated locally."
      },
      uuid: {
        quantity: "Quantity"
      },
      randomNumber: {
        minimum: "Minimum",
        maximum: "Maximum",
        quantity: "Quantity",
        decimals: "Decimals",
        allowRepeats: "Allow repeats",
        invalidRange: "Enter a valid range.",
        tooManyUnique: "The range is too small for that many unique integers.",
        generated: "Numbers generated locally."
      },
      json: {
        input: "JSON input",
        format: "Format",
        minify: "Minify",
        valid: "Valid JSON.",
        invalid: "Invalid JSON."
      },
      jsonValidator: {
        validate: "Validate",
        status: "Status",
        details: "Details",
        valid: "Valid JSON.",
        invalid: "Invalid JSON.",
        empty: "Paste JSON to validate.",
        line: "Line",
        column: "Column",
        rootType: "Root type",
        itemCount: "Items",
        characterCount: "Characters"
      },
      jsonTools: {
        mode: "JSON mode",
        indent: "Indent",
        downloadJson: "Download JSON",
        formatted: "JSON formatted.",
        minified: "JSON minified."
      },
      base64: {
        placeholder: "Input text or Base64",
        inputAria: "Base64 input",
        outputAria: "Base64 output",
        encoded: "Encoded.",
        decoded: "Decoded.",
        invalid: "Invalid Base64 input."
      },
      url: {
        placeholder: "URL component or encoded value",
        inputAria: "URL input",
        outputAria: "URL output",
        encoded: "Encoded.",
        decoded: "Decoded.",
        malformed: "Malformed URL encoded input."
      },
      regex: {
        pattern: "Pattern",
        flags: "Flags",
        sampleText: "Sample text",
        matches: "Matches",
        groups: "Groups",
        noMatches: "No matches found.",
        invalid: "Invalid regular expression.",
        global: "Global",
        ignoreCase: "Ignore case",
        multiline: "Multiline",
        dotAll: "Dot all",
        unicode: "Unicode",
        sticky: "Sticky"
      },
      timestamp: {
        unix: "Unix timestamp",
        dateTime: "Date and time",
        convertTimestamp: "Convert timestamp",
        convertDate: "Convert date",
        currentTime: "Use current time",
        unixSeconds: "Unix seconds",
        unixMilliseconds: "Unix milliseconds",
        iso: "ISO",
        utc: "UTC",
        local: "Local",
        invalid: "Enter a valid timestamp or date."
      },
      color: {
        hexColor: "HEX color",
        preview: "Preview",
        copyResults: "Copy results",
        invalid: "Enter a valid HEX color.",
        converted: "Converted."
      },
      numberBase: {
        inputValue: "Input value",
        inputPlaceholder: "Enter an integer, for example 255",
        inputBase: "Input base",
        outputBase: "Output base",
        customBase: "Custom base",
        customBaseLabel: "Custom base (2-36)",
        autoDetect: "Auto Detect",
        binary: "Binary",
        octal: "Octal",
        decimal: "Decimal",
        hexadecimal: "Hexadecimal",
        mainResult: "Main result",
        popularResults: "Common bases",
        baseColumn: "Base",
        nameColumn: "Name",
        resultColumn: "Result",
        copyResult: "Copy result",
        copyAllResults: "Copy all results",
        swap: "Swap bases",
        uppercase: "Uppercase",
        lowercase: "Lowercase",
        letterCase: "Letter case",
        prefixOutput: "Add 0b, 0o, or 0x prefix",
        privacy:
          "Your input is processed locally in your browser and is not uploaded to a server.",
        converted: "Number converted.",
        cleared: "Cleared.",
        exampleLoaded: "Example loaded.",
        downloaded: "TXT downloaded.",
        swapNeedsResult: "Convert first before swapping with the current result.",
        empty: "Enter a number to convert.",
        baseRange: "The base must be between 2 and 36.",
        fractional: "Fractional values are not supported yet. Please enter an integer.",
        signOnly: "Enter digits after the minus sign.",
        invalidSign: "The minus sign can only appear once at the start of the number.",
        invalidWhitespace: "Spaces inside the number are not supported. Remove the spaces and try again.",
        invalidDigitBinary:
          "The digit \"{digit}\" is not valid in base 2. Binary numbers can only contain 0 and 1.",
        invalidDigit:
          "The digit \"{digit}\" is not valid in base {base}. Allowed digits: {digits}.",
        examples: [
          "Decimal 255 to Hexadecimal FF",
          "Binary 101010 to Decimal 42",
          "Hexadecimal 7B to Decimal 123",
          "Decimal -64 to Binary -1000000"
        ]
      },
      percentage: {
        percentOf: "What is X% of Y?",
        ratio: "X is what percent of Y?",
        change: "Percentage change",
        invalid: "Invalid"
      }
    }
  },
  vi: {
    site: {
      defaultTitle: "SunnyTools - Công Cụ Online Miễn Phí",
      defaultDescription:
        "Bộ công cụ online nhanh, riêng tư, chạy trực tiếp trên trình duyệt cho văn bản, lập trình, tạo mã, chuyển đổi và tính toán.",
      footerDescription:
        "Bộ tiện ích nhanh, riêng tư, chạy trên trình duyệt cho công việc viết nội dung, lập trình và tính toán hằng ngày.",
      copyright: "Bảo lưu mọi quyền.",
      homeAria: "Trang chủ SunnyTools",
      primaryNavigation: "Điều hướng chính",
      mobileNavigation: "Điều hướng di động",
      openNavigation: "Mở điều hướng",
      footerNavigation: "Chân trang"
    },
    nav: {
      home: "Trang chủ",
      allTools: "Tất cả công cụ",
      textTools: "Công cụ văn bản",
      developerTools: "Công cụ lập trình",
      generatorTools: "Công cụ tạo mã",
      about: "Giới thiệu",
      contact: "Liên hệ",
      privacyPolicy: "Chính sách bảo mật",
      terms: "Điều khoản"
    },
    common: {
      searchTools: "Tìm công cụ",
      browseAllTools: "Xem tất cả công cụ",
      activeNow: "đang hoạt động",
      totalTools: "tổng công cụ",
      tools: "công cụ",
      tool: "công cụ",
      toolsShown: "đang hiển thị",
      noToolsFound: "Không tìm thấy công cụ.",
      noMatchingTools: "Không có công cụ phù hợp.",
      allCategories: "Tất cả danh mục",
      filterByCategory: "Lọc theo danh mục",
      openTool: "Mở công cụ",
      planned: "Đang lên kế hoạch",
      general: "Chung",
      language: "Ngôn ngữ",
      searchPlaceholder: "Tìm theo tên, từ khóa hoặc nhu cầu",
      homeSearchPlaceholder: "Tìm công cụ"
    },
    home: {
      title: "Công Cụ Online Miễn Phí",
      description:
        "Sử dụng các công cụ online nhanh, riêng tư, chạy trên trình duyệt cho văn bản, lập trình, tạo mã, chuyển đổi và tính toán.",
      eyebrow: "Tiện ích online miễn phí",
      heading: "Công cụ chạy trên trình duyệt cho công việc hằng ngày.",
      lead:
        "Đếm văn bản, tạo giá trị, định dạng dữ liệu lập trình và chuyển đổi nhanh mà không gửi nội dung của bạn lên máy chủ.",
      popularEyebrow: "Phổ biến",
      popularTitle: "Công cụ phổ biến",
      popularDescription:
        "Bắt đầu với những công cụ được dùng nhiều nhất, bao gồm Bộ Đếm Văn Bản đã sẵn sàng chạy trên trình duyệt.",
      categoriesEyebrow: "Danh mục",
      categoriesTitle: "Duyệt theo danh mục",
      categoriesDescription:
        "Mỗi danh mục gom các công cụ liên quan với URL tĩnh, phù hợp cho SEO và liên kết nội bộ."
    },
    toolsIndex: {
      title: "Tất Cả Công Cụ",
      description: "Duyệt tất cả công cụ SunnyTools đang hoạt động và đang lên kế hoạch trong một thư mục dễ tìm kiếm.",
      eyebrow: "Thư mục công cụ",
      heading: "Tất cả công cụ",
      lead: "Tìm các công cụ chạy trên trình duyệt từ một nguồn dữ liệu tập trung.",
      availableTitle: "Có thể dùng ngay",
      availableDescription: "Những công cụ này đã được triển khai và chạy hoàn toàn trên trình duyệt."
    },
    categoryPage: {
      eyebrow: "Danh mục",
      collectionSuffix: "collection",
      descriptionSuffix: "Duyệt các công cụ miễn phí chạy trên trình duyệt trong nhóm",
      sectionDescription: "Mỗi công cụ có URL riêng và chạy trực tiếp trên trình duyệt.",
      guideTitle: "Nhóm này hỗ trợ gì",
      useCasesTitle: "Trường hợp sử dụng phổ biến",
      tipsTitle: "Gợi ý thực tế"
    },
    toolPage: {
      breadcrumbHome: "Trang chủ",
      breadcrumbAllTools: "Tất cả công cụ",
      fallbackCategory: "Công cụ",
      faq: "Câu hỏi thường gặp",
      whatIs: "{tool} là gì?",
      howToUse: "Cách sử dụng",
      howItWorks: "Cách hoạt động",
      privacy: "Dữ liệu có được lưu không?",
      relatedTitle: "Công cụ liên quan",
      relatedDescription: "Các công cụ cùng danh mục đã sẵn sàng hoặc đang được lên kế hoạch."
    },
    pages: {
      about: {
        title: "Giới Thiệu",
        description: "Tìm hiểu về dự án SunnyTools và kiến trúc static-first.",
        eyebrow: "Giới thiệu",
        heading: "SunnyTools là bộ sưu tập công cụ online nhanh đang được mở rộng.",
        paragraphs: [
          "Dự án bắt đầu với nền tảng static-first, dữ liệu dùng chung, layout tái sử dụng và các công cụ chỉ chạy trên trình duyệt. Mục tiêu là giữ trang nhanh, riêng tư, dễ bảo trì và dễ deploy."
        ],
        sections: [
          {
            title: "Nguyên tắc xây dựng",
            body: "Mỗi trang công cụ cần tải nhanh, giải quyết một nhu cầu rõ ràng, tránh dependency không cần thiết và giữ input của người dùng trên thiết bị bất cứ khi nào có thể."
          }
        ]
      },
      contact: {
        title: "Liên Hệ",
        description: "Liên hệ SunnyTools để gửi phản hồi, yêu cầu công cụ mới hoặc hỗ trợ.",
        eyebrow: "Liên hệ",
        heading: "Liên hệ SunnyTools",
        paragraphs: [
          "Nếu bạn muốn gửi phản hồi, báo lỗi hoặc đề xuất công cụ mới, hãy gửi email tới sunny.contact.251010@gmail.com."
        ],
        sections: [
          {
            title: "Yêu cầu công cụ",
            body: "Hãy ghi rõ tên công cụ, input mong đợi, output mong đợi và các yêu cầu về privacy hoặc SEO nên được cân nhắc khi triển khai."
          }
        ]
      },
      privacyPolicy: {
        title: "Chính Sách Bảo Mật",
        description: "Đọc chính sách bảo mật của SunnyTools cho các công cụ chạy trên trình duyệt.",
        eyebrow: "Chính sách bảo mật",
        heading: "Chính Sách Bảo Mật",
        paragraphs: [
          "SunnyTools được thiết kế để các công cụ ban đầu chạy ngay trong trình duyệt. Word Counter không gửi văn bản đến backend, database hoặc dịch vụ bên thứ ba."
        ],
        sections: [
          {
            title: "Analytics và quảng cáo",
            body: "SunnyTools dùng Google Analytics 4 để hiểu lượt xem trang và mức sử dụng chung của website. Input trong các công cụ vẫn được xử lý cục bộ trong trình duyệt. Google AdSense hiện chưa được kết nối."
          },
          {
            title: "Liên hệ",
            body: "Câu hỏi về privacy có thể gửi tới sunny.contact.251010@gmail.com."
          }
        ]
      },
      terms: {
        title: "Điều Khoản",
        description: "Đọc các điều khoản cơ bản khi sử dụng SunnyTools.",
        eyebrow: "Điều khoản",
        heading: "Điều Khoản Sử Dụng",
        paragraphs: [
          "SunnyTools cung cấp các tiện ích chạy trên trình duyệt cho mục đích thông tin và năng suất công việc. Hãy kiểm tra kết quả trước khi dùng trong workflow production."
        ],
        sections: [
          {
            title: "Không bảo hành",
            body: "Các công cụ được cung cấp nguyên trạng. Dự án nên thêm ngôn ngữ pháp lý phù hợp với từng khu vực trước khi launch công khai."
          }
        ]
      }
    },
    toolUi: {
      shared: {
        input: "Input",
        output: "Output",
        textInput: "Nhập văn bản",
        copy: "Sao chép",
        copied: "Đã sao chép.",
        copiedToClipboard: "Đã sao chép vào clipboard.",
        clear: "Xóa",
        generate: "Tạo",
        downloadPng: "Tải PNG",
        downloadTxt: "Tải TXT",
        downloadMd: "Tải MD",
        downloadHtml: "Tải HTML",
        downloadCss: "Tải CSS",
        downloadJs: "Tải JS",
        loadExample: "Tải ví dụ",
        encode: "Mã hóa",
        decode: "Giải mã",
        convert: "Chuyển đổi",
        invalid: "Không hợp lệ"
      },
      wordCounter: {
        placeholder: "Dán hoặc nhập văn bản tại đây",
        words: "Từ",
        characters: "Ký tự",
        charactersNoSpaces: "Ký tự không tính khoảng trắng",
        sentences: "Câu",
        paragraphs: "Đoạn",
        readingTime: "Thời gian đọc",
        minute: "phút",
        minutes: "phút",
        copyFailed: "Sao chép thất bại. Hãy chọn văn bản thủ công."
      },
      characterCounter: {
        placeholder: "Nhập hoặc dán văn bản",
        characterLimit: "Giới hạn ký tự",
        withoutSpaces: "Không tính khoảng trắng",
        lines: "Dòng",
        remaining: "Còn lại",
        usage: "Đã dùng giới hạn",
        noLimit: "Không giới hạn"
      },
      caseConverter: {
        placeholder: "Nhập văn bản cần chuyển đổi",
        upper: "IN HOA",
        lower: "in thường",
        title: "Viết Hoa Tiêu Đề",
        sentence: "Viết hoa câu",
        kebab: "kebab-case",
        snake: "snake_case",
        camel: "camelCase",
        pascal: "PascalCase",
        constant: "CONSTANT_CASE",
        dot: "dot.case"
      },
      slug: {
        title: "Tiêu đề hoặc văn bản",
        separator: "Ký tự phân cách",
        hyphen: "Gạch ngang",
        underscore: "Gạch dưới",
        lowercase: "Chữ thường",
        removeStopWords: "Xóa từ thừa",
        generatedSlug: "Slug đã tạo",
        generated: "Đã tạo slug."
      },
      duplicateLines: {
        trimLines: "Cắt khoảng trắng",
        caseSensitive: "Phân biệt hoa thường",
        skipEmpty: "Bỏ dòng trống",
        uniqueLines: "Dòng duy nhất",
        duplicatesRemoved: "Dòng trùng đã xóa",
        inputLines: "Dòng đầu vào",
        processed: "Đã xóa dòng trùng."
      },
      sortLines: {
        sortType: "Kiểu sắp xếp",
        text: "Văn bản",
        numeric: "Số",
        length: "Độ dài dòng",
        direction: "Thứ tự",
        ascending: "Tăng dần",
        descending: "Giảm dần",
        trimLines: "Cắt khoảng trắng",
        skipEmpty: "Bỏ dòng trống",
        uniqueOnly: "Chỉ giữ dòng duy nhất",
        sorted: "Đã sắp xếp dòng."
      },
      lineTools: {
        mode: "Chế độ xử lý dòng",
        removeDuplicates: "Xóa dòng trùng",
        sortLines: "Sắp xếp dòng",
        outputLines: "Dòng kết quả",
        linesRemoved: "Dòng đã xóa"
      },
      textCompare: {
        original: "Văn bản gốc",
        changed: "Văn bản đã đổi",
        compare: "So sánh",
        unchanged: "Giữ nguyên",
        added: "Đã thêm",
        removed: "Đã xóa",
        mode: "Chế độ",
        lineMode: "Dòng",
        wordMode: "Từ",
        swap: "Đổi vị trí",
        summary: "Tóm tắt",
        type: "Loại",
        line: "Dòng",
        noDifference: "Không tìm thấy khác biệt theo dòng."
      },
      markdown: {
        markdownInput: "Nhập Markdown",
        preview: "Xem trước",
        copyMarkdown: "Sao chép Markdown",
        copyHtml: "Sao chép HTML",
        htmlCopied: "Đã sao chép HTML.",
        rendered: "Đã render preview."
      },
      htmlFormatter: {
        htmlInput: "Nhập HTML",
        indentSize: "Kích thước indent",
        useTabs: "Dùng tab",
        formatted: "Đã định dạng HTML.",
        invalid: "Hãy nhập HTML dạng văn bản hợp lệ."
      },
      minifier: {
        source: "Nguồn",
        minified: "Đã thu gọn",
        before: "Trước",
        after: "Sau",
        saved: "Tiết kiệm",
        keepComments: "Giữ comment",
        minifiedStatus: "Đã thu gọn cục bộ.",
        invalidCss: "CSS có ngoặc chưa khớp hoặc string chưa đóng.",
        invalidJs: "JavaScript có string, comment, template hoặc ngoặc chưa đóng."
      },
      lorem: {
        paragraphs: "Đoạn",
        sentencesEach: "Câu mỗi đoạn",
        startClassic: "Bắt đầu kiểu cổ điển"
      },
      qr: {
        textOrUrl: "Văn bản hoặc URL",
        size: "Kích thước",
        margin: "Lề",
        error: "Không thể tạo mã QR cho nội dung này."
      },
      password: {
        generatedPassword: "Mật khẩu đã tạo",
        length: "Độ dài",
        lowercase: "Chữ thường",
        uppercase: "Chữ hoa",
        numbers: "Số",
        symbols: "Ký tự đặc biệt",
        selectSet: "Hãy chọn ít nhất một nhóm ký tự.",
        generated: "Mật khẩu đã được tạo cục bộ."
      },
      uuid: {
        quantity: "Số lượng"
      },
      randomNumber: {
        minimum: "Nhỏ nhất",
        maximum: "Lớn nhất",
        quantity: "Số lượng",
        decimals: "Chữ số thập phân",
        allowRepeats: "Cho phép lặp",
        invalidRange: "Hãy nhập khoảng hợp lệ.",
        tooManyUnique: "Khoảng số quá nhỏ cho số lượng số nguyên duy nhất này.",
        generated: "Số đã được tạo cục bộ."
      },
      json: {
        input: "Nhập JSON",
        format: "Định dạng",
        minify: "Nén gọn",
        valid: "JSON hợp lệ.",
        invalid: "JSON không hợp lệ."
      },
      jsonValidator: {
        validate: "Kiểm tra",
        status: "Trạng thái",
        details: "Chi tiết",
        valid: "JSON hợp lệ.",
        invalid: "JSON không hợp lệ.",
        empty: "Dán JSON để kiểm tra.",
        line: "Dòng",
        column: "Cột",
        rootType: "Kiểu gốc",
        itemCount: "Mục",
        characterCount: "Ký tự"
      },
      jsonTools: {
        mode: "Chế độ JSON",
        indent: "Thụt lề",
        downloadJson: "Tải JSON",
        formatted: "Đã định dạng JSON.",
        minified: "Đã nén gọn JSON."
      },
      base64: {
        placeholder: "Nhập văn bản hoặc Base64",
        inputAria: "Input Base64",
        outputAria: "Output Base64",
        encoded: "Đã mã hóa.",
        decoded: "Đã giải mã.",
        invalid: "Input Base64 không hợp lệ."
      },
      url: {
        placeholder: "URL component hoặc giá trị đã mã hóa",
        inputAria: "Input URL",
        outputAria: "Output URL",
        encoded: "Đã mã hóa.",
        decoded: "Đã giải mã.",
        malformed: "Giá trị URL encoded không hợp lệ."
      },
      regex: {
        pattern: "Pattern",
        flags: "Flags",
        sampleText: "Văn bản mẫu",
        matches: "Kết quả khớp",
        groups: "Groups",
        noMatches: "Không tìm thấy match.",
        invalid: "Biểu thức chính quy không hợp lệ.",
        global: "Global",
        ignoreCase: "Không phân biệt hoa thường",
        multiline: "Nhiều dòng",
        dotAll: "Dot all",
        unicode: "Unicode",
        sticky: "Sticky"
      },
      timestamp: {
        unix: "Unix timestamp",
        dateTime: "Ngày và giờ",
        convertTimestamp: "Chuyển timestamp",
        convertDate: "Chuyển ngày",
        currentTime: "Dùng thời gian hiện tại",
        unixSeconds: "Unix giây",
        unixMilliseconds: "Unix mili giây",
        iso: "ISO",
        utc: "UTC",
        local: "Cục bộ",
        invalid: "Hãy nhập timestamp hoặc ngày hợp lệ."
      },
      color: {
        hexColor: "Màu HEX",
        preview: "Xem trước",
        copyResults: "Sao chép kết quả",
        invalid: "Hãy nhập màu HEX hợp lệ.",
        converted: "Đã chuyển đổi."
      },
      numberBase: {
        inputValue: "Giá trị đầu vào",
        inputPlaceholder: "Nhập số nguyên, ví dụ 255",
        inputBase: "Hệ đầu vào",
        outputBase: "Hệ đầu ra",
        customBase: "Hệ tùy chỉnh",
        customBaseLabel: "Hệ tùy chỉnh (2-36)",
        autoDetect: "Tự nhận diện",
        binary: "Nhị phân",
        octal: "Bát phân",
        decimal: "Thập phân",
        hexadecimal: "Thập lục phân",
        mainResult: "Kết quả chính",
        popularResults: "Các hệ phổ biến",
        baseColumn: "Hệ",
        nameColumn: "Tên",
        resultColumn: "Kết quả",
        copyResult: "Sao chép kết quả",
        copyAllResults: "Sao chép tất cả kết quả",
        swap: "Đổi hệ",
        uppercase: "Chữ hoa",
        lowercase: "Chữ thường",
        letterCase: "Kiểu chữ",
        prefixOutput: "Thêm prefix 0b, 0o hoặc 0x",
        privacy:
          "Dữ liệu được xử lý trực tiếp trong trình duyệt và không được tải lên máy chủ.",
        converted: "Đã chuyển đổi số.",
        cleared: "Đã xóa.",
        exampleLoaded: "Đã tải ví dụ.",
        downloaded: "Đã tải TXT.",
        swapNeedsResult: "Hãy chuyển đổi trước khi đổi hệ với kết quả hiện tại.",
        empty: "Vui lòng nhập số cần chuyển đổi.",
        baseRange: "Hệ cơ số phải nằm trong khoảng từ 2 đến 36.",
        fractional: "Công cụ hiện chưa hỗ trợ phần thập phân. Vui lòng nhập một số nguyên.",
        signOnly: "Hãy nhập chữ số sau dấu âm.",
        invalidSign: "Dấu âm chỉ được xuất hiện một lần ở đầu số.",
        invalidWhitespace: "Công cụ không hỗ trợ khoảng trắng bên trong số. Hãy xóa khoảng trắng và thử lại.",
        invalidDigitBinary:
          "Chữ số \"{digit}\" không hợp lệ trong hệ 2. Số nhị phân chỉ được chứa 0 và 1.",
        invalidDigit:
          "Chữ số \"{digit}\" không hợp lệ trong hệ {base}. Các chữ số được phép: {digits}.",
        examples: [
          "Thập phân 255 sang thập lục phân FF",
          "Nhị phân 101010 sang thập phân 42",
          "Thập lục phân 7B sang thập phân 123",
          "Thập phân -64 sang nhị phân -1000000"
        ]
      },
      percentage: {
        percentOf: "X% của Y là bao nhiêu?",
        ratio: "X là bao nhiêu phần trăm của Y?",
        change: "Mức thay đổi phần trăm",
        invalid: "Không hợp lệ"
      }
    }
  }
} as const;

export type Messages = (typeof messages)[Locale];

export const getMessages = (locale: Locale): Messages =>
  messages[locale] ?? messages[defaultLocale];
