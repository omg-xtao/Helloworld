const themeConfig = {
    siteFont: "-apple-system, SF Pro, Microsoft YaHei, Source Sans Pro, Helvetica Neue, Arial, sans-serif",
    defaultTheme: "light",
    codeFontFamily: "JetBrains Mono",
    bodyFontSize: "17px",
    // 浅色主题
    light: {
        // 主题（颜色）
        themeColor: "#42b983",
        // 背景（颜色）
        backgroundColor: "#ffffff",
        // 侧边栏标题（颜色）
        sidebarSublinkColor: "#7c7c7c",
        // 标题字符（颜色）
        titleColor: "#1a1a1f",
        // 一般字符（颜色）
        textColor: "#1a1a1f",
        // 粗体字符（颜色）
        textStrongColor: "#1a1a1f",
        // 注释内容（颜色）
        blockQuoteColor: "#1a1a1f",
        // 强调字符（颜色）
        highlightColor: "#d22778",
        // 强调字符背景（颜色）
        highlightBackgroundColor: "#f6f7f8",
        // 强调字符在强调提示样式中的背景（颜色）
        highlightTipBackgroundColor: "#efefef",
        // 强调字符在普通提示样式中的背景（颜色）
        highlightWarnBackgroundColor: "#efefef",
        // 代码块代码（颜色）
        codeTextColor: "#1a1a1f",
        // 代码块类型字符（颜色）
        codeTypeColor: "#1a1a1f",
        // 代码块背景（颜色）
        codeBackgroundColor: "#f6f8fa",
        // 代码关键字（颜色）
        codeKeywordColor: "#e96900",
        // 代码函数字符（颜色）
        codeFunctionColor: "#3389e1",
        // 代码数字字符（颜色）
        codeNumberColor: "#8d90e8",
        // 代码字符串（颜色）
        codeStringColor: "#84d115",
        // 边框（颜色）
        borderColor: "#dadde1",
        // 表格边框（颜色）
        tableBorderColor: "#cccccc",
        // 表格标题背景（颜色）
        tableTheadBackgroundColor: "rgba(0,0,0,.03)",
        // 光标悬浮效果背景（颜色）
        hoverBackgroundColor: "#8383831f",
        // 折叠块背景（颜色）
        summaryBackgroundColor: "#e7f7e8",
        // 超链接（颜色）
        herfColor: "#16995e",
        // 分割线（颜色）
        hrColor: "#afafaf",
        // 灵活弹窗警告插件样式（颜色）
        alertNoteBorderColor: "#4cb3d4",
        alertNoteBackgroundColor: "#eef9fd",
        alertNoteHighlightBackgroundColor: "rgba(84,199,236,.15)",
        alertTipBorderColor: "#009400",
        alertTipBackgroundColor: "#e6f6e6",
        alertTipHighlightBackgroundColor: "rgba(0,164,0,.15)",
        alertWarningBorderColor: "#e6a700",
        alertWarningBackgroundColor: "#fff8e6",
        alertWarningHighlightBackgroundColor: "rgba(255,186,0,.15)",
        alertAttentionBorderColor: "#e13238",
        alertAttentionBackgroundColor: "#ffebec",
        alertAttentionHighlightBackgroundColor: "rgba(250,56,62,.15)",
        // 封面背景样式
        coverBackground: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        // 渐变文字背景样式
        gradientTextColor: "-webkit-linear-gradient(315deg,#42d392 25%,#647eff)",
        // 主题样式图标
        themeIcon: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMzNDQ5NWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1vb24iPjxwYXRoIGQ9Ik0yMSAxMi43OUE5IDkgMCAxIDEgMTEuMjEgMyA3IDcgMCAwIDAgMjEgMTIuNzl6Ij48L3BhdGg+PC9zdmc+")',
    },
    // 深色主题
    dark: {
        // 主题（颜色）
        themeColor: "#4894df",
        // 背景（颜色）
        backgroundColor: "#1b1b1d",
        // 侧边栏标题（颜色）
        sidebarSublinkColor: "#b4b4b4",
        // 标题字符（颜色）
        titleColor: "#e3e3e3",
        // 一般字符（颜色）
        textColor: "#e3e3e3",
        // 粗体字符（颜色）
        textStrongColor: "#e3e3e3",
        // 注释内容（颜色）
        blockQuoteColor: "#e3e3e3",
        // 强调字符（颜色）
        highlightColor: "#c792ea",
        // 强调字符背景（颜色）
        highlightBackgroundColor: "hsla(0,0%,100%,.1)",
        // 强调字符在强调提示样式中的背景（颜色）
        highlightTipBackgroundColor: "hsl(0deg 0% 41% / 10%)",
        // 强调字符在普通提示样式中的背景（颜色）
        highlightWarnBackgroundColor: "#36423a",
        // 代码块代码（颜色）
        codeTextColor: "#d4d4d4",
        // 代码块类型字符（颜色）
        codeTypeColor: "#d4d4d4",
        // 代码关键字（颜色）
        codeKeywordColor: "#89ddff",
        // 代码函数字符（颜色）
        codeFunctionColor: "#ffcb6b",
        // 代码数字字符（颜色）
        codeNumberColor: "#c3e88d",
        // 代码字符串（颜色）
        codeStringColor: "#5987cb",
        // 代码块背景（颜色）
        codeBackgroundColor: "#212121",
        // 边框（颜色）
        borderColor: "#444950",
        // 表格边框（颜色）
        tableBorderColor: "#606770",
        // 表格标题背景（颜色）
        tableTheadBackgroundColor: "hsla(0,0%,100%,.07)",
        // 光标悬浮效果背景（颜色）
        hoverBackgroundColor: "#8d8d8d1f",
        // 折叠块背景（颜色）
        summaryBackgroundColor: "#1d364c",
        // 超链接（颜色）
        herfColor: "#2973b7",
        // 分割线（颜色）
        hrColor: "#464646",
        // 灵活弹窗警告插件样式（颜色）
        alertNoteBorderColor: "#4cb3d4",
        alertNoteBackgroundColor: "#193c47",
        alertNoteHighlightBackgroundColor: "rgba(84,199,236,0.15)",
        alertTipBorderColor: "#009400",
        alertTipBackgroundColor: "#003100",
        alertTipHighlightBackgroundColor: "rgba(0,164,0,0.15)",
        alertWarningBorderColor: "#e6a700",
        alertWarningBackgroundColor: "#4d3800",
        alertWarningHighlightBackgroundColor: "rgba(255,186,0,0.15)",
        alertAttentionBorderColor: "#e13238",
        alertAttentionBackgroundColor: "#4b1113",
        alertAttentionHighlightBackgroundColor: "rgba(250,56,62,0.15)",
        // 封面背景样式
        coverBackground: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        // 渐变文字背景样式
        gradientTextColor: "-webkit-linear-gradient(315deg, rgb(236, 76, 81), rgb(250, 85, 176), rgb(178, 72, 248), rgb(67, 69, 193))",
        // 主题样式图标
        themeIcon: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSI+PC9jaXJjbGU+PGxpbmUgeDE9IjEyIiB5MT0iMSIgeDI9IjEyIiB5Mj0iMyI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjIxIiB4Mj0iMTIiIHkyPSIyMyI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iNC4yMiIgeDI9IjUuNjQiIHkyPSI1LjY0Ij48L2xpbmU+PGxpbmUgeDE9IjE4LjM2IiB5MT0iMTguMzYiIHgyPSIxOS43OCIgeTI9IjE5Ljc4Ij48L2xpbmU+PGxpbmUgeDE9IjEiIHkxPSIxMiIgeDI9IjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIyMSIgeTE9IjEyIiB4Mj0iMjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iMTkuNzgiIHgyPSI1LjY0IiB5Mj0iMTguMzYiPjwvbGluZT48bGluZSB4MT0iMTguMzYiIHkxPSI1LjY0IiB4Mj0iMTkuNzgiIHkyPSI0LjIyIj48L2xpbmU+PC9zdmc+")',
    },
};