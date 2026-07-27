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
        "Start with the tools people reach for most often, including the first production-ready Word Counter.",
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
      sectionDescription: "Each tool has its own URL and runs directly in the browser."
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
            body: "Analytics and Google AdSense are not connected in this phase. If they are added later, this page should be updated before production launch."
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
        camel: "camelCase"
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
        direction: "Direction",
        ascending: "Ascending",
        descending: "Descending",
        trimLines: "Trim lines",
        skipEmpty: "Skip empty lines",
        uniqueOnly: "Unique only",
        sorted: "Lines sorted."
      },
      textCompare: {
        original: "Original text",
        changed: "Changed text",
        compare: "Compare",
        unchanged: "Unchanged",
        added: "Added",
        removed: "Removed",
        summary: "Summary",
        type: "Type",
        line: "Line",
        noDifference: "No line differences found."
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
        "Bắt đầu với những công cụ được dùng nhiều nhất, bao gồm Word Counter đã sẵn sàng cho bản production.",
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
      sectionDescription: "Mỗi công cụ có URL riêng và chạy trực tiếp trên trình duyệt."
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
            body: "Analytics và Google AdSense chưa được kết nối trong giai đoạn này. Nếu thêm sau này, trang này cần được cập nhật trước khi launch production."
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
        camel: "camelCase"
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
        direction: "Thứ tự",
        ascending: "Tăng dần",
        descending: "Giảm dần",
        trimLines: "Cắt khoảng trắng",
        skipEmpty: "Bỏ dòng trống",
        uniqueOnly: "Chỉ giữ dòng duy nhất",
        sorted: "Đã sắp xếp dòng."
      },
      textCompare: {
        original: "Văn bản gốc",
        changed: "Văn bản đã đổi",
        compare: "So sánh",
        unchanged: "Giữ nguyên",
        added: "Đã thêm",
        removed: "Đã xóa",
        summary: "Tóm tắt",
        type: "Loại",
        line: "Dòng",
        noDifference: "Không tìm thấy khác biệt theo dòng."
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
