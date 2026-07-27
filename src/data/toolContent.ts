import { defaultLocale, type Locale } from "../i18n/config";
import type { FAQItem } from "../types/tool";

export interface ToolContent {
  intro: string;
  howToUse: string;
  howItWorks: string;
  privacy: string;
  faqs: FAQItem[];
}

type LocalizedToolContent = Record<Locale, ToolContent>;

const contentBySlug: Record<string, LocalizedToolContent> = {
  "word-counter": {
    en: {
      intro:
        "Text Counter measures words, characters, lines, structure, character-limit usage, and estimated reading time as you type.",
      howToUse: "Paste or type text, optionally set a character limit, then copy, clear, or load an example. Every statistic updates instantly.",
      howItWorks:
        "Words are matched from Unicode letters and numbers, characters include every typed character, line breaks are counted across Windows and Unix text, and reading time uses a 200 words per minute baseline.",
      privacy: "The text is processed locally in your browser and is not sent to a server.",
      faqs: [
        { question: "Does it upload my text?", answer: "No. The calculation runs locally." },
        { question: "Can it count characters and words together?", answer: "Yes. The same panel shows words, characters, no-space characters, lines, sentences, paragraphs, and reading time." },
        { question: "Can I track a character limit?", answer: "Yes. Set a limit to see remaining characters and percentage used." }
      ]
    },
    vi: {
      intro:
        "Bộ Đếm Văn Bản đo số từ, ký tự, dòng, cấu trúc nội dung, mức dùng giới hạn ký tự và thời gian đọc trong khi bạn nhập.",
      howToUse: "Dán hoặc nhập văn bản, tùy chọn đặt giới hạn ký tự, rồi sao chép, xóa hoặc tải ví dụ. Mọi thống kê cập nhật tức thì.",
      howItWorks:
        "Từ được nhận diện từ chữ cái và chữ số Unicode, ký tự bao gồm mọi ký tự đã nhập, xuống dòng Windows và Unix đều được tính, còn thời gian đọc dùng mốc 200 từ mỗi phút.",
      privacy: "Văn bản được xử lý cục bộ trong trình duyệt của bạn và không được gửi lên máy chủ.",
      faqs: [
        { question: "Công cụ có tải văn bản của tôi lên không?", answer: "Không. Việc tính toán chạy cục bộ trên trình duyệt." },
        { question: "Có đếm từ và ký tự cùng lúc không?", answer: "Có. Cùng một giao diện hiển thị số từ, ký tự, ký tự không tính khoảng trắng, dòng, câu, đoạn và thời gian đọc." },
        { question: "Có theo dõi giới hạn ký tự được không?", answer: "Có. Đặt giới hạn để xem số ký tự còn lại và phần trăm đã dùng." }
      ]
    }
  },
  "character-counter": {
    en: {
      intro: "Character Counter helps you measure text length for posts, ads, forms, and metadata.",
      howToUse: "Enter text and optionally set a character limit to see remaining characters.",
      howItWorks:
        "The tool counts all characters, whitespace, characters without spaces, lines, words, and limit usage.",
      privacy: "All counting happens in the browser. Your text is not uploaded.",
      faqs: [
        { question: "Are spaces included?", answer: "Yes, and a separate no-spaces count is also shown." },
        { question: "Can I use it for meta descriptions?", answer: "Yes. Set a limit and watch the remaining count." },
        { question: "Does it save input?", answer: "No. Refreshing the page clears the input." }
      ]
    },
    vi: {
      intro: "Công cụ Đếm Ký Tự giúp đo độ dài văn bản cho bài đăng, quảng cáo, form và metadata.",
      howToUse: "Nhập văn bản và tùy chọn đặt giới hạn ký tự để xem số ký tự còn lại.",
      howItWorks:
        "Công cụ đếm tất cả ký tự, khoảng trắng, ký tự không tính khoảng trắng, số dòng, số từ và mức sử dụng giới hạn.",
      privacy: "Mọi phép đếm đều diễn ra trong trình duyệt. Văn bản của bạn không được upload.",
      faqs: [
        { question: "Khoảng trắng có được tính không?", answer: "Có, và công cụ cũng hiển thị riêng số ký tự không tính khoảng trắng." },
        { question: "Có dùng cho meta description được không?", answer: "Được. Đặt giới hạn và theo dõi số ký tự còn lại." },
        { question: "Công cụ có lưu input không?", answer: "Không. Tải lại trang sẽ xóa input." }
      ]
    }
  },
  "case-converter": {
    en: {
      intro: "Case Converter changes text into common casing formats for writing and code cleanup.",
      howToUse: "Type text, choose a case mode, then copy the converted result.",
      howItWorks:
        "The browser transforms the input into uppercase, lowercase, title case, sentence case, kebab case, snake case, or camel case.",
      privacy: "Your text stays in the browser and is not stored.",
      faqs: [
        { question: "Does it support title case?", answer: "Yes. It capitalizes common word starts." },
        { question: "Can I create slugs?", answer: "Use kebab case for URL-friendly text." },
        { question: "Does it change the original input?", answer: "No. The converted result is shown separately." }
      ]
    },
    vi: {
      intro: "Công cụ Chuyển Đổi Chữ Hoa Thường đổi văn bản sang các kiểu chữ phổ biến cho viết nội dung và làm sạch code.",
      howToUse: "Nhập văn bản, chọn kiểu chữ mong muốn, sau đó sao chép kết quả.",
      howItWorks:
        "Trình duyệt chuyển input thành chữ hoa, chữ thường, title case, sentence case, kebab case, snake case hoặc camel case.",
      privacy: "Văn bản của bạn ở lại trong trình duyệt và không được lưu trữ.",
      faqs: [
        { question: "Công cụ có hỗ trợ title case không?", answer: "Có. Công cụ viết hoa phần đầu các từ phổ biến." },
        { question: "Có tạo slug được không?", answer: "Hãy dùng kebab case để tạo văn bản thân thiện với URL." },
        { question: "Input gốc có bị thay đổi không?", answer: "Không. Kết quả chuyển đổi được hiển thị riêng." }
      ]
    }
  },
  "remove-duplicate-lines": {
    en: {
      intro: "Line Tools cleans multiline text by removing duplicate lines or sorting lists from the same browser-only workspace.",
      howToUse: "Paste lines, choose Remove Duplicates or Sort Lines, adjust the mode options, then copy or download the result.",
      howItWorks:
        "The browser normalizes line endings, applies trimming and empty-line options, then either keeps first unique lines or sorts by text, number, or line length.",
      privacy: "Your text is processed locally and is never uploaded.",
      faqs: [
        { question: "Can it still remove duplicates only?", answer: "Yes. The Remove Duplicates mode keeps the first occurrence and reports how many lines were removed." },
        { question: "Can it sort numbers and line length?", answer: "Yes. Sort Lines supports text, numeric, and line-length sorting in ascending or descending order." },
        { question: "Does switching mode delete my input?", answer: "No. The same input stays in place when you switch between modes." }
      ]
    },
    vi: {
      intro: "Công Cụ Xử Lý Dòng làm sạch văn bản nhiều dòng bằng cách xóa dòng trùng hoặc sắp xếp danh sách trong cùng một giao diện.",
      howToUse: "Dán các dòng, chọn Xóa dòng trùng hoặc Sắp xếp dòng, chỉnh tùy chọn của chế độ rồi sao chép hoặc tải kết quả.",
      howItWorks:
        "Trình duyệt chuẩn hóa xuống dòng, áp dụng tùy chọn cắt khoảng trắng và bỏ dòng trống, sau đó giữ dòng duy nhất đầu tiên hoặc sắp xếp theo văn bản, số hay độ dài dòng.",
      privacy: "Văn bản của bạn được xử lý cục bộ và không bao giờ được upload.",
      faqs: [
        { question: "Vẫn có thể chỉ xóa dòng trùng không?", answer: "Có. Chế độ Xóa dòng trùng giữ lần xuất hiện đầu tiên và báo số dòng đã xóa." },
        { question: "Có sắp xếp số và độ dài dòng không?", answer: "Có. Chế độ Sắp xếp dòng hỗ trợ văn bản, số và độ dài dòng theo chiều tăng hoặc giảm." },
        { question: "Đổi chế độ có mất input không?", answer: "Không. Input được giữ nguyên khi chuyển giữa các chế độ." }
      ]
    }
  },
  "slug-generator": {
    en: {
      intro: "Slug Generator turns titles, headings, and Vietnamese text into clean SEO-friendly URL slugs.",
      howToUse: "Paste a title, choose hyphen or underscore separators, then copy or download the generated slug.",
      howItWorks:
        "The browser normalizes accents, removes unsafe URL characters, applies optional stop-word cleanup, and joins words with your selected separator.",
      privacy: "Slug generation runs locally. Your titles are not uploaded.",
      faqs: [
        { question: "Does it support Vietnamese accents?", answer: "Yes. Vietnamese diacritics are normalized into ASCII characters." },
        { question: "Can I use underscores?", answer: "Yes. Choose underscore as the separator." },
        { question: "Can it remove stop words?", answer: "Yes. Enable the stop-word option for common English and Vietnamese filler words." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo Đường Dẫn Slug chuyển tiêu đề, heading và tiếng Việt có dấu thành URL slug thân thiện SEO.",
      howToUse: "Dán tiêu đề, chọn dấu gạch ngang hoặc gạch dưới, rồi sao chép hoặc tải slug đã tạo.",
      howItWorks:
        "Trình duyệt chuẩn hóa dấu tiếng Việt, xóa ký tự không an toàn cho URL, tùy chọn bỏ từ thừa và nối các từ bằng ký tự phân cách đã chọn.",
      privacy: "Việc tạo slug chạy cục bộ. Tiêu đề của bạn không được upload.",
      faqs: [
        { question: "Công cụ có hỗ trợ tiếng Việt có dấu không?", answer: "Có. Dấu tiếng Việt được chuẩn hóa thành ký tự ASCII." },
        { question: "Có dùng dấu gạch dưới được không?", answer: "Có. Chọn underscore làm ký tự phân cách." },
        { question: "Có thể xóa từ thừa không?", answer: "Có. Bật tùy chọn bỏ từ thừa cho một số từ phổ biến tiếng Anh và tiếng Việt." }
      ]
    }
  },
  "sort-lines": {
    en: {
      intro: "Sort Lines reorders pasted text line by line for lists, IDs, numbers, and simple cleanup tasks.",
      howToUse: "Paste lines, choose text or numeric sorting, pick ascending or descending order, then copy the output.",
      howItWorks:
        "Sorting runs with browser JavaScript. Text mode uses locale-aware comparison, while numeric mode parses line values as numbers.",
      privacy: "All sorting happens in your browser.",
      faqs: [
        { question: "Can it sort numbers?", answer: "Yes. Select numeric mode for number lists." },
        { question: "Can it remove blanks?", answer: "Yes. Enable skip empty lines before sorting." },
        { question: "Does it change my original text?", answer: "No. The sorted result is shown separately." }
      ]
    },
    vi: {
      intro: "Công cụ Sắp Xếp Dòng sắp xếp từng dòng văn bản cho danh sách, ID, số và các tác vụ làm sạch đơn giản.",
      howToUse: "Dán các dòng, chọn sắp xếp theo văn bản hoặc số, chọn tăng dần hoặc giảm dần, rồi sao chép output.",
      howItWorks:
        "Việc sắp xếp chạy bằng JavaScript trong trình duyệt. Chế độ văn bản dùng so sánh theo ngôn ngữ, còn chế độ số parse giá trị dòng thành số.",
      privacy: "Mọi thao tác sắp xếp diễn ra trong trình duyệt của bạn.",
      faqs: [
        { question: "Có sắp xếp số được không?", answer: "Có. Chọn chế độ số cho danh sách số." },
        { question: "Có bỏ dòng trống được không?", answer: "Có. Bật tùy chọn bỏ qua dòng trống trước khi sắp xếp." },
        { question: "Input gốc có bị thay đổi không?", answer: "Không. Kết quả đã sắp xếp được hiển thị riêng." }
      ]
    }
  },
  "text-compare": {
    en: {
      intro: "Text Compare highlights line-level differences between two text blocks.",
      howToUse: "Paste the original text on the left and the changed text on the right, then review the diff summary.",
      howItWorks:
        "The browser compares lines with a lightweight longest-common-subsequence pass and labels unchanged, removed, and added lines.",
      privacy: "Both text blocks stay in your browser.",
      faqs: [
        { question: "Does it compare word by word?", answer: "This version focuses on line-level differences." },
        { question: "Can I compare lists?", answer: "Yes. It works well for simple list changes." },
        { question: "Is either text saved?", answer: "No. Refreshing the page clears the comparison." }
      ]
    },
    vi: {
      intro: "Công cụ So Sánh Văn Bản đánh dấu khác biệt theo từng dòng giữa hai khối văn bản.",
      howToUse: "Dán văn bản gốc bên trái và văn bản đã thay đổi bên phải, rồi xem phần tóm tắt khác biệt.",
      howItWorks:
        "Trình duyệt so sánh các dòng bằng thuật toán longest-common-subsequence nhẹ và gắn nhãn dòng giữ nguyên, bị xóa hoặc được thêm.",
      privacy: "Cả hai khối văn bản đều ở lại trong trình duyệt của bạn.",
      faqs: [
        { question: "Công cụ có so sánh từng từ không?", answer: "Phiên bản này tập trung vào khác biệt theo từng dòng." },
        { question: "Có so sánh danh sách được không?", answer: "Có. Công cụ phù hợp với các thay đổi danh sách đơn giản." },
        { question: "Văn bản có được lưu không?", answer: "Không. Tải lại trang sẽ xóa phần so sánh." }
      ]
    }
  },
  "lorem-ipsum-generator": {
    en: {
      intro: "Lorem Ipsum Generator creates placeholder copy for mockups, wireframes, and layout tests.",
      howToUse: "Choose paragraphs, sentences per paragraph, and whether to start with classic lorem ipsum.",
      howItWorks:
        "The tool assembles deterministic placeholder words into readable sentence and paragraph blocks.",
      privacy: "Generation happens locally in the browser.",
      faqs: [
        { question: "Can I copy the output?", answer: "Yes. Use the Copy button after generating text." },
        { question: "Is it random?", answer: "It uses a local word pool and rotates words for varied output." },
        { question: "Can I generate short copy?", answer: "Yes. Lower the paragraph and sentence counts." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo Lorem Ipsum tạo văn bản placeholder cho mockup, wireframe và kiểm tra layout.",
      howToUse: "Chọn số đoạn, số câu mỗi đoạn và tùy chọn bắt đầu bằng câu lorem ipsum cổ điển.",
      howItWorks:
        "Công cụ ghép các từ placeholder cục bộ thành câu và đoạn văn dễ đọc.",
      privacy: "Quá trình tạo văn bản diễn ra cục bộ trong trình duyệt.",
      faqs: [
        { question: "Tôi có thể sao chép kết quả không?", answer: "Có. Dùng nút Sao chép sau khi tạo văn bản." },
        { question: "Nó có ngẫu nhiên không?", answer: "Công cụ dùng kho từ cục bộ và xoay vòng từ để tạo kết quả đa dạng." },
        { question: "Có tạo văn bản ngắn được không?", answer: "Được. Giảm số đoạn và số câu mỗi đoạn." }
      ]
    }
  },
  "qr-code-generator": {
    en: {
      intro: "QR Code Generator creates downloadable QR codes for URLs or plain text.",
      howToUse: "Enter text or a URL, choose size and margin, then download the PNG.",
      howItWorks: "The QR image is rendered to a canvas in the browser using a QR encoding library.",
      privacy: "The QR input is processed locally and is not sent to a backend.",
      faqs: [
        { question: "Can I download the QR code?", answer: "Yes. Download it as a PNG image." },
        { question: "Can it encode normal text?", answer: "Yes. URLs and plain text both work." },
        { question: "Is my QR content uploaded?", answer: "No. Rendering happens locally." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo Mã QR tạo mã QR có thể tải về cho URL hoặc văn bản thường.",
      howToUse: "Nhập văn bản hoặc URL, chọn kích thước và lề, sau đó tải file PNG.",
      howItWorks: "Ảnh QR được render vào canvas trong trình duyệt bằng thư viện mã hóa QR.",
      privacy: "Nội dung QR được xử lý cục bộ và không gửi đến backend.",
      faqs: [
        { question: "Tôi có thể tải mã QR không?", answer: "Có. Bạn có thể tải dưới dạng ảnh PNG." },
        { question: "Có mã hóa văn bản thường được không?", answer: "Được. URL và văn bản thường đều hoạt động." },
        { question: "Nội dung QR có bị upload không?", answer: "Không. Việc render chạy cục bộ." }
      ]
    }
  },
  "password-generator": {
    en: {
      intro: "Password Generator creates strong random passwords with customizable rules.",
      howToUse: "Choose length and character sets, then generate and copy a password.",
      howItWorks:
        "The tool uses the browser Crypto API where available and guarantees at least one character from each selected set.",
      privacy: "Generated passwords are created locally and are not transmitted.",
      faqs: [
        { question: "Is the password generated securely?", answer: "It uses browser cryptographic randomness when available." },
        { question: "Can I exclude symbols?", answer: "Yes. Toggle symbols off before generating." },
        { question: "Does it save passwords?", answer: "No. Nothing is stored." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo Mật Khẩu tạo mật khẩu ngẫu nhiên mạnh với quy tắc tùy chỉnh.",
      howToUse: "Chọn độ dài và nhóm ký tự, sau đó tạo và sao chép mật khẩu.",
      howItWorks:
        "Công cụ dùng Crypto API của trình duyệt khi có thể và đảm bảo mỗi nhóm ký tự đã chọn có ít nhất một ký tự.",
      privacy: "Mật khẩu được tạo cục bộ và không được truyền đi.",
      faqs: [
        { question: "Mật khẩu có được tạo an toàn không?", answer: "Công cụ dùng độ ngẫu nhiên mã hóa của trình duyệt khi có sẵn." },
        { question: "Có bỏ ký tự đặc biệt được không?", answer: "Được. Tắt Symbols trước khi tạo mật khẩu." },
        { question: "Công cụ có lưu mật khẩu không?", answer: "Không. Không có gì được lưu trữ." }
      ]
    }
  },
  "uuid-generator": {
    en: {
      intro: "UUID Generator creates unique identifiers for databases, tests, and application code.",
      howToUse: "Choose how many UUIDs to generate, then copy the list.",
      howItWorks: "The browser uses `crypto.randomUUID()` when supported and falls back to random bytes.",
      privacy: "UUIDs are generated locally in your browser.",
      faqs: [
        { question: "Which UUID version is generated?", answer: "The tool generates version 4 UUIDs." },
        { question: "Can I generate multiple IDs?", answer: "Yes. Choose a quantity before generating." },
        { question: "Are IDs sent anywhere?", answer: "No. They are local browser values." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo UUID tạo định danh duy nhất cho database, test và code ứng dụng.",
      howToUse: "Chọn số lượng UUID cần tạo, sau đó sao chép danh sách.",
      howItWorks: "Trình duyệt dùng `crypto.randomUUID()` khi hỗ trợ và fallback sang random bytes.",
      privacy: "UUID được tạo cục bộ trong trình duyệt của bạn.",
      faqs: [
        { question: "Công cụ tạo UUID phiên bản nào?", answer: "Công cụ tạo UUID version 4." },
        { question: "Có tạo nhiều ID cùng lúc được không?", answer: "Được. Chọn số lượng trước khi tạo." },
        { question: "ID có được gửi đi đâu không?", answer: "Không. Chúng là giá trị cục bộ trong trình duyệt." }
      ]
    }
  },
  "random-number-generator": {
    en: {
      intro: "Random Number Generator creates local random integers or decimals inside a chosen range.",
      howToUse: "Set minimum, maximum, quantity, decimal places, and whether repeated values are allowed.",
      howItWorks:
        "The tool uses browser cryptographic randomness when available and maps random values into your selected range.",
      privacy: "Generated numbers are created locally and are not sent anywhere.",
      faqs: [
        { question: "Can it generate decimals?", answer: "Yes. Increase the decimal places value." },
        { question: "Can it avoid duplicates?", answer: "Yes for integer ranges large enough to satisfy the requested quantity." },
        { question: "Is the result stored?", answer: "No. Values only exist in the page." }
      ]
    },
    vi: {
      intro: "Công cụ Tạo Số Ngẫu Nhiên tạo số nguyên hoặc số thập phân cục bộ trong khoảng bạn chọn.",
      howToUse: "Đặt giá trị nhỏ nhất, lớn nhất, số lượng, số chữ số thập phân và tùy chọn cho phép lặp.",
      howItWorks:
        "Công cụ dùng độ ngẫu nhiên mã hóa của trình duyệt khi có thể và ánh xạ giá trị ngẫu nhiên vào khoảng đã chọn.",
      privacy: "Các số được tạo cục bộ và không được gửi đi đâu.",
      faqs: [
        { question: "Có tạo số thập phân được không?", answer: "Có. Tăng giá trị chữ số thập phân." },
        { question: "Có tránh số trùng được không?", answer: "Có với khoảng số nguyên đủ lớn cho số lượng yêu cầu." },
        { question: "Kết quả có được lưu không?", answer: "Không. Giá trị chỉ tồn tại trên trang." }
      ]
    }
  },
  "json-formatter": {
    en: {
      intro: "JSON Formatter & Validator formats, minifies, validates, and summarizes JSON snippets in one browser-only workspace.",
      howToUse: "Paste JSON, choose Format, Minify, or Validate, then copy or download valid output. The input stays in place when you switch modes.",
      howItWorks: "The tool parses JSON with `JSON.parse`, formats or minifies with `JSON.stringify`, and derives validation details such as root type, item count, character count, and line/column hints.",
      privacy: "JSON input stays in your browser.",
      faqs: [
        { question: "Can it format and validate in one place?", answer: "Yes. Use Format for readable JSON, Minify for compact JSON, and Validate for status and details." },
        { question: "Does it show where JSON is invalid?", answer: "When the browser provides an error position, the tool estimates the line and column." },
        { question: "Is JSON uploaded?", answer: "No. Parsing, formatting, minifying, and validation happen locally." }
      ]
    },
    vi: {
      intro: "Định Dạng Và Kiểm Tra JSON giúp định dạng, nén gọn, kiểm tra và tóm tắt đoạn JSON trong một giao diện chạy trên trình duyệt.",
      howToUse: "Dán JSON, chọn Định dạng, Nén gọn hoặc Kiểm tra, rồi sao chép hoặc tải output hợp lệ. Input được giữ nguyên khi đổi chế độ.",
      howItWorks: "Công cụ parse JSON bằng `JSON.parse`, định dạng hoặc nén bằng `JSON.stringify`, đồng thời tạo chi tiết kiểm tra như kiểu gốc, số mục, số ký tự và gợi ý dòng/cột.",
      privacy: "Input JSON ở lại trong trình duyệt của bạn.",
      faqs: [
        { question: "Có định dạng và kiểm tra JSON trong cùng một nơi không?", answer: "Có. Dùng Định dạng để dễ đọc, Nén gọn để giảm dung lượng và Kiểm tra để xem trạng thái cùng chi tiết." },
        { question: "Có báo vị trí JSON sai không?", answer: "Khi trình duyệt cung cấp vị trí lỗi, công cụ sẽ ước tính dòng và cột." },
        { question: "JSON có bị upload không?", answer: "Không. Việc parse, định dạng, nén gọn và kiểm tra đều chạy cục bộ." }
      ]
    }
  },
  "json-validator": {
    en: {
      intro: "JSON Validator checks whether a JSON snippet can be parsed safely by JavaScript.",
      howToUse: "Paste JSON into the input. The validation status updates and reports the first syntax issue it finds.",
      howItWorks:
        "The browser runs `JSON.parse` locally and derives line and column hints from the error position when possible.",
      privacy: "JSON validation runs only in your browser.",
      faqs: [
        { question: "Does it format JSON too?", answer: "This page focuses on validation. Use JSON Formatter for pretty printing and minifying." },
        { question: "Can it validate API responses?", answer: "Yes. Paste the response body as text." },
        { question: "Is the JSON sent to a server?", answer: "No. Parsing happens locally." }
      ]
    },
    vi: {
      intro: "Công cụ Kiểm Tra JSON kiểm tra xem một đoạn JSON có thể parse an toàn bằng JavaScript hay không.",
      howToUse: "Dán JSON vào input. Trạng thái kiểm tra sẽ cập nhật và báo lỗi cú pháp đầu tiên nếu có.",
      howItWorks:
        "Trình duyệt chạy `JSON.parse` cục bộ và suy ra gợi ý dòng/cột từ vị trí lỗi khi có thể.",
      privacy: "Việc kiểm tra JSON chỉ chạy trong trình duyệt của bạn.",
      faqs: [
        { question: "Công cụ có định dạng JSON không?", answer: "Trang này tập trung vào kiểm tra hợp lệ. Dùng JSON Formatter để pretty print hoặc nén gọn." },
        { question: "Có kiểm tra response API được không?", answer: "Có. Dán nội dung response dạng text vào." },
        { question: "JSON có được gửi lên server không?", answer: "Không. Việc parse diễn ra cục bộ." }
      ]
    }
  },
  "base64-encoder-decoder": {
    en: {
      intro: "Base64 Encoder/Decoder converts text to and from Base64.",
      howToUse: "Enter text, choose Encode or Decode, then copy the result.",
      howItWorks: "The browser uses UTF-8 safe Base64 conversion with `TextEncoder` and `TextDecoder`.",
      privacy: "Input is converted locally and is not sent to a server.",
      faqs: [
        { question: "Does it support Unicode?", answer: "Yes. It uses UTF-8 conversion." },
        { question: "What happens with invalid Base64?", answer: "The tool shows an error instead of crashing." },
        { question: "Can I copy output?", answer: "Yes. Use the Copy button." }
      ]
    },
    vi: {
      intro: "Công cụ Mã Hóa Và Giải Mã Base64 chuyển văn bản sang Base64 và ngược lại.",
      howToUse: "Nhập văn bản, chọn Mã hóa hoặc Giải mã, sau đó sao chép kết quả.",
      howItWorks: "Trình duyệt dùng chuyển đổi Base64 an toàn UTF-8 với `TextEncoder` và `TextDecoder`.",
      privacy: "Input được chuyển đổi cục bộ và không gửi lên máy chủ.",
      faqs: [
        { question: "Công cụ có hỗ trợ Unicode không?", answer: "Có. Công cụ dùng chuyển đổi UTF-8." },
        { question: "Base64 không hợp lệ thì sao?", answer: "Công cụ hiện lỗi thay vì bị crash." },
        { question: "Có sao chép output được không?", answer: "Có. Dùng nút Sao chép." }
      ]
    }
  },
  "regex-tester": {
    en: {
      intro: "Regex Tester lets you try JavaScript regular expressions against sample text.",
      howToUse: "Enter a pattern, choose flags, paste sample text, and review highlighted matches plus captured groups.",
      howItWorks:
        "The tool creates a browser `RegExp` with your flags and iterates matches locally, protecting against empty-match loops.",
      privacy: "Patterns and sample text stay on the page.",
      faqs: [
        { question: "Which regex flavor is supported?", answer: "It uses JavaScript regular expressions." },
        { question: "Can it show capture groups?", answer: "Yes. Matched groups are listed for each match." },
        { question: "Does it upload sample text?", answer: "No. Everything runs in the browser." }
      ]
    },
    vi: {
      intro: "Công cụ Kiểm Tra Regex cho phép thử biểu thức chính quy JavaScript trên văn bản mẫu.",
      howToUse: "Nhập pattern, chọn flags, dán văn bản mẫu, rồi xem match được highlight và captured groups.",
      howItWorks:
        "Công cụ tạo `RegExp` trong trình duyệt với flags bạn chọn và duyệt kết quả khớp cục bộ, có bảo vệ vòng lặp với match rỗng.",
      privacy: "Pattern và văn bản mẫu chỉ ở trên trang.",
      faqs: [
        { question: "Công cụ hỗ trợ kiểu regex nào?", answer: "Công cụ dùng biểu thức chính quy JavaScript." },
        { question: "Có hiển thị capture group không?", answer: "Có. Các group khớp được liệt kê cho từng match." },
        { question: "Văn bản mẫu có bị upload không?", answer: "Không. Mọi thứ chạy trong trình duyệt." }
      ]
    }
  },
  "markdown-previewer": {
    en: {
      intro: "Markdown Previewer renders common Markdown syntax into sanitized HTML for quick writing and documentation checks.",
      howToUse: "Write Markdown in the editor, review the preview, then copy Markdown, copy HTML, or download a .md file.",
      howItWorks:
        "The browser escapes raw HTML first and then renders supported Markdown patterns such as headings, lists, links, code blocks, tables, and blockquotes.",
      privacy: "Markdown stays in your browser and is not sent to a backend.",
      faqs: [
        { question: "Can Markdown run scripts?", answer: "No. Raw HTML is escaped before preview rendering." },
        { question: "Does it support tables?", answer: "Yes. Simple pipe tables are rendered." },
        { question: "Can I copy generated HTML?", answer: "Yes. Use the Copy HTML button." }
      ]
    },
    vi: {
      intro: "Công cụ Xem Trước Markdown render các cú pháp Markdown phổ biến thành HTML đã sanitize để kiểm tra nội dung và tài liệu nhanh.",
      howToUse: "Viết Markdown trong editor, xem preview, rồi sao chép Markdown, sao chép HTML hoặc tải file .md.",
      howItWorks:
        "Trình duyệt escape HTML thô trước, sau đó render các pattern Markdown được hỗ trợ như heading, list, link, code block, table và blockquote.",
      privacy: "Markdown ở lại trong trình duyệt và không gửi tới backend.",
      faqs: [
        { question: "Markdown có chạy script được không?", answer: "Không. HTML thô được escape trước khi render preview." },
        { question: "Có hỗ trợ bảng không?", answer: "Có. Bảng pipe đơn giản được render." },
        { question: "Có sao chép HTML đã tạo được không?", answer: "Có. Dùng nút Sao chép HTML." }
      ]
    }
  },
  "html-formatter": {
    en: {
      intro: "HTML Formatter turns compact or messy HTML into readable indented markup.",
      howToUse: "Paste HTML, choose indentation settings, then format, copy, or download the result.",
      howItWorks:
        "The browser tokenizes tags and text, preserves content, and applies indentation without executing markup.",
      privacy: "HTML formatting happens locally in your browser.",
      faqs: [
        { question: "Does it execute HTML?", answer: "No. Input is formatted as text." },
        { question: "Can I use tabs?", answer: "Yes. Enable the tab indentation option." },
        { question: "Will it remove valid content?", answer: "No. The formatter is conservative and keeps text and tags." }
      ]
    },
    vi: {
      intro: "Công cụ Định Dạng HTML chuyển HTML nén hoặc lộn xộn thành markup có thụt lề dễ đọc.",
      howToUse: "Dán HTML, chọn thiết lập indent, rồi định dạng, sao chép hoặc tải kết quả.",
      howItWorks:
        "Trình duyệt tách tag và text, giữ nội dung, rồi áp dụng thụt lề mà không thực thi markup.",
      privacy: "Việc định dạng HTML diễn ra cục bộ trong trình duyệt.",
      faqs: [
        { question: "Công cụ có thực thi HTML không?", answer: "Không. Input được định dạng như văn bản." },
        { question: "Có dùng tab được không?", answer: "Có. Bật tùy chọn thụt lề bằng tab." },
        { question: "Có làm mất nội dung hợp lệ không?", answer: "Không. Formatter giữ tag và text theo hướng thận trọng." }
      ]
    }
  },
  "css-minifier": {
    en: {
      intro: "CSS Minifier compresses CSS snippets and shows size savings.",
      howToUse: "Paste CSS, minify it, then review byte savings, copy the output, or download a .min.css file.",
      howItWorks:
        "The browser removes comments and unnecessary whitespace while keeping strings and common CSS syntax intact.",
      privacy: "CSS input is processed locally and never uploaded.",
      faqs: [
        { question: "Does it change CSS behavior?", answer: "It uses conservative whitespace and comment removal to preserve valid CSS behavior." },
        { question: "Can I download the minified file?", answer: "Yes. Download it as .min.css." },
        { question: "Does it validate CSS?", answer: "It catches basic unmatched braces and string issues before minifying." }
      ]
    },
    vi: {
      intro: "Công cụ Thu Gọn CSS nén đoạn CSS và hiển thị dung lượng tiết kiệm.",
      howToUse: "Dán CSS, minify, rồi xem số byte giảm, sao chép output hoặc tải file .min.css.",
      howItWorks:
        "Trình duyệt xóa comment và khoảng trắng không cần thiết trong khi giữ string và cú pháp CSS phổ biến.",
      privacy: "Input CSS được xử lý cục bộ và không bao giờ upload.",
      faqs: [
        { question: "Có làm thay đổi hành vi CSS không?", answer: "Công cụ xóa comment và khoảng trắng theo hướng thận trọng để giữ hành vi CSS hợp lệ." },
        { question: "Có tải file đã minify được không?", answer: "Có. Tải dưới dạng .min.css." },
        { question: "Công cụ có kiểm tra CSS không?", answer: "Công cụ bắt các lỗi cơ bản như thiếu ngoặc hoặc string chưa đóng trước khi minify." }
      ]
    }
  },
  "javascript-minifier": {
    en: {
      intro: "JavaScript Minifier compresses JavaScript text without running it.",
      howToUse: "Paste JavaScript, choose whether to keep comments, minify, then copy or download the .min.js file.",
      howItWorks:
        "The browser walks through the source text, preserves strings and templates, removes safe whitespace, and never uses eval or Function.",
      privacy: "JavaScript input stays on the page and is never executed or uploaded.",
      faqs: [
        { question: "Does it run my JavaScript?", answer: "No. It only reads and rewrites text." },
        { question: "Can comments be kept?", answer: "Yes. Toggle the keep comments option." },
        { question: "Does it detect syntax issues?", answer: "It reports common unclosed strings, comments, and brackets before minifying." }
      ]
    },
    vi: {
      intro: "Công cụ Thu Gọn JavaScript nén văn bản JavaScript mà không chạy code.",
      howToUse: "Dán JavaScript, chọn giữ comment hay không, minify, rồi sao chép hoặc tải file .min.js.",
      howItWorks:
        "Trình duyệt duyệt source text, giữ string và template, xóa khoảng trắng an toàn và không bao giờ dùng eval hoặc Function.",
      privacy: "Input JavaScript chỉ ở trên trang, không được thực thi và không upload.",
      faqs: [
        { question: "Công cụ có chạy JavaScript của tôi không?", answer: "Không. Công cụ chỉ đọc và ghi lại văn bản." },
        { question: "Có giữ comment được không?", answer: "Có. Bật tùy chọn giữ comment." },
        { question: "Có phát hiện lỗi cú pháp không?", answer: "Công cụ báo các lỗi phổ biến như string, comment hoặc ngoặc chưa đóng trước khi minify." }
      ]
    }
  },
  "unix-timestamp-converter": {
    en: {
      intro: "Unix Timestamp Converter converts epoch seconds or milliseconds into readable dates and back.",
      howToUse: "Enter Unix seconds, Unix milliseconds, or a date-time value, convert in either direction, use current time or an example, and copy individual outputs.",
      howItWorks:
        "The browser creates JavaScript Date values, auto-detects common seconds or milliseconds input, and displays UTC, local, ISO, and Unix formats.",
      privacy: "Date conversion is local and no values are stored.",
      faqs: [
        { question: "Does it support milliseconds?", answer: "Yes. Long Unix values are treated as milliseconds." },
        { question: "Can I convert a date back to Unix time?", answer: "Yes. Use the date input and Convert date button." },
        { question: "Which local timezone is used?", answer: "The local time comes from your browser timezone." }
      ]
    },
    vi: {
      intro: "Công cụ Chuyển Đổi Unix Timestamp chuyển epoch giây hoặc mili giây thành ngày giờ dễ đọc và ngược lại.",
      howToUse: "Nhập Unix giây, Unix mili giây hoặc giá trị ngày giờ, chuyển đổi hai chiều, dùng thời gian hiện tại hoặc ví dụ, rồi sao chép từng output.",
      howItWorks:
        "Trình duyệt tạo JavaScript Date, tự nhận diện input giây hoặc mili giây phổ biến, rồi hiển thị UTC, local, ISO và Unix.",
      privacy: "Việc chuyển đổi ngày giờ diễn ra cục bộ và không lưu giá trị.",
      faqs: [
        { question: "Có hỗ trợ mili giây không?", answer: "Có. Giá trị Unix dài được hiểu là mili giây." },
        { question: "Có chuyển ngày giờ ngược lại thành Unix không?", answer: "Có. Dùng ô nhập ngày và nút Chuyển ngày." },
        { question: "Múi giờ local là gì?", answer: "Giờ local lấy từ múi giờ của trình duyệt." }
      ]
    }
  },
  "url-encoder-decoder": {
    en: {
      intro: "URL Encoder/Decoder converts text into URL-safe encoded strings and back.",
      howToUse: "Paste a value, choose Encode or Decode, and copy the output.",
      howItWorks: "The tool uses `encodeURIComponent` and `decodeURIComponent` in the browser.",
      privacy: "No URL data is uploaded.",
      faqs: [
        { question: "Can it decode query parameters?", answer: "Yes, paste the encoded component value." },
        { question: "What if decoding fails?", answer: "The tool shows an error for malformed input." },
        { question: "Does it encode full URLs?", answer: "It is best for URL components and parameter values." }
      ]
    },
    vi: {
      intro: "Công cụ Mã Hóa Và Giải Mã URL chuyển văn bản thành chuỗi an toàn cho URL và ngược lại.",
      howToUse: "Dán giá trị, chọn Mã hóa hoặc Giải mã, sau đó sao chép output.",
      howItWorks: "Công cụ dùng `encodeURIComponent` và `decodeURIComponent` trong trình duyệt.",
      privacy: "Dữ liệu URL không được upload.",
      faqs: [
        { question: "Có giải mã query parameter được không?", answer: "Có, dán giá trị component đã mã hóa vào." },
        { question: "Nếu giải mã lỗi thì sao?", answer: "Công cụ hiện lỗi cho input sai định dạng." },
        { question: "Có mã hóa cả URL đầy đủ không?", answer: "Công cụ phù hợp nhất cho URL component và giá trị parameter." }
      ]
    }
  },
  "timestamp-converter": {
    en: {
      intro: "Timestamp Converter translates Unix timestamps and readable dates.",
      howToUse: "Enter a Unix timestamp or date-time value and convert between formats.",
      howItWorks: "It creates JavaScript Date values and displays local, UTC, ISO, and Unix outputs.",
      privacy: "Date conversion runs locally in the browser.",
      faqs: [
        { question: "Does it support seconds and milliseconds?", answer: "Yes. It detects common Unix timestamp lengths." },
        { question: "Which timezone is local?", answer: "The local timezone is your browser timezone." },
        { question: "Is any date saved?", answer: "No. Values stay on the page." }
      ]
    },
    vi: {
      intro: "Công cụ Chuyển Đổi Timestamp đổi Unix timestamp và ngày giờ dễ đọc.",
      howToUse: "Nhập Unix timestamp hoặc giá trị ngày giờ và chuyển đổi giữa các định dạng.",
      howItWorks: "Công cụ tạo JavaScript Date và hiển thị local, UTC, ISO và Unix output.",
      privacy: "Chuyển đổi ngày giờ chạy cục bộ trong trình duyệt.",
      faqs: [
        { question: "Có hỗ trợ giây và mili giây không?", answer: "Có. Công cụ tự nhận diện độ dài timestamp phổ biến." },
        { question: "Múi giờ local là gì?", answer: "Múi giờ local là múi giờ của trình duyệt." },
        { question: "Ngày giờ có được lưu không?", answer: "Không. Giá trị chỉ ở trên trang." }
      ]
    }
  },
  "color-converter": {
    en: {
      intro: "Color Converter translates HEX colors into RGB and HSL values.",
      howToUse: "Enter a HEX color, preview it, and copy the converted values.",
      howItWorks: "The browser parses HEX channels and calculates RGB and HSL values.",
      privacy: "Color conversion runs locally.",
      faqs: [
        { question: "Does it support short HEX?", answer: "Yes. Values like #0f8 are expanded." },
        { question: "Can I preview the color?", answer: "Yes. A swatch updates with the parsed color." },
        { question: "Can I copy each format?", answer: "Yes. Use the copy buttons next to the results." }
      ]
    },
    vi: {
      intro: "Công cụ Chuyển Đổi Màu đổi màu HEX sang giá trị RGB và HSL.",
      howToUse: "Nhập màu HEX, xem trước màu và sao chép các giá trị đã chuyển đổi.",
      howItWorks: "Trình duyệt parse các kênh HEX và tính giá trị RGB, HSL.",
      privacy: "Chuyển đổi màu chạy cục bộ.",
      faqs: [
        { question: "Có hỗ trợ HEX rút gọn không?", answer: "Có. Giá trị như #0f8 sẽ được mở rộng." },
        { question: "Có xem trước màu được không?", answer: "Có. Ô màu sẽ cập nhật theo giá trị đã parse." },
        { question: "Có sao chép từng định dạng được không?", answer: "Có. Dùng các nút sao chép bên cạnh kết quả." }
      ]
    }
  },
  "percentage-calculator": {
    en: {
      intro: "Percentage Calculator handles common percent, change, and ratio calculations.",
      howToUse: "Enter values in one of the calculator rows and the result updates instantly.",
      howItWorks:
        "It calculates percent of a number, what percent one number is of another, and percentage change.",
      privacy: "All calculations run locally in the browser.",
      faqs: [
        { question: "Can it calculate percent increase?", answer: "Yes. Use the change calculator." },
        { question: "Does it round results?", answer: "Results are rounded for readability." },
        { question: "Are values stored?", answer: "No. They are only used in the browser." }
      ]
    },
    vi: {
      intro: "Máy Tính Phần Trăm xử lý các phép tính phần trăm, tỷ lệ và mức thay đổi phổ biến.",
      howToUse: "Nhập giá trị vào một hàng tính toán và kết quả sẽ cập nhật ngay.",
      howItWorks:
        "Công cụ tính X phần trăm của một số, một số là bao nhiêu phần trăm của số khác, và mức thay đổi phần trăm.",
      privacy: "Mọi phép tính đều chạy cục bộ trong trình duyệt.",
      faqs: [
        { question: "Có tính phần trăm tăng được không?", answer: "Có. Dùng hàng tính mức thay đổi." },
        { question: "Kết quả có được làm tròn không?", answer: "Kết quả được làm tròn để dễ đọc." },
        { question: "Giá trị có được lưu không?", answer: "Không. Chúng chỉ được dùng trong trình duyệt." }
      ]
    }
  }
};

export const getToolContent = (
  slug: string,
  locale: Locale = defaultLocale
): ToolContent | undefined => {
  const localizedContent = contentBySlug[slug];
  return localizedContent?.[locale] ?? localizedContent?.[defaultLocale];
};

export const toolContentBySlug: Record<string, ToolContent> = Object.fromEntries(
  Object.entries(contentBySlug).map(([slug, content]) => [slug, content[defaultLocale]])
);
