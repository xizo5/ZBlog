// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/zuo/ZBlog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///D:/zuo/ZBlog/node_modules/@sugarat/theme/node.js";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  // search: false,
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | 粥里有勺糖',
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "Zuo",
  // 友链
  friend: [
    // {
    //   nickname: '粥里有勺糖',
    //   des: '你的指尖用于改变世界的力量',
    //   avatar:
    //     'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
    //   url: 'https://sugarat.top',
    // },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ]
  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'text',
  //       content: '文章首/文尾有群二维码',
  //       style: 'padding-top:0'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://sugarat.top'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://theme.sugarat.top/group.html',
  //     }
  //   ],
  //   duration: 0
  // },
});

// docs/.vitepress/config.mts
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base: "/ZBlog/",
  lang: "zh-cn",
  title: "Zuo",
  // description: "粥里有勺糖的博客主题，基于 vitepress 实现",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置logo
    logo: "/logo.jpg",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "\u9996\u9875", link: "/" }
      // { text: "关于作者", link: "https://sugarat.top/aboutme.html" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ATQQ/sugar-blog/tree/master/packages/theme"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx6dW9cXFxcWkJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx6dW9cXFxcWkJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3p1by9aQmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuXHJcbi8vIFx1NUJGQ1x1NTE2NVx1NEUzQlx1OTg5OFx1NzY4NFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tIFwiLi9ibG9nLXRoZW1lXCI7XHJcblxyXG4vLyBcdTU5ODJcdTY3OUNcdTRGN0ZcdTc1MjggR2l0SHViL0dpdGVlIFBhZ2VzIFx1N0I0OVx1NTE2Q1x1NTE3MVx1NUU3M1x1NTNGMFx1OTBFOFx1N0Y3MlxyXG4vLyBcdTkwMUFcdTVFMzhcdTk3MDBcdTg5ODFcdTRGRUVcdTY1MzkgYmFzZSBcdThERUZcdTVGODRcdUZGMENcdTkwMUFcdTVFMzhcdTRFM0FcdTIwMUMvXHU0RUQzXHU1RTkzXHU1NDBEL1x1MjAxRFxyXG4vLyBjb25zdCBiYXNlID0gcHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMgPT09ICd0cnVlJ1xyXG4vLyAgID8gJy92aXRlcHJlc3MtYmxvZy1zdWdhci10ZW1wbGF0ZS8nXHJcbi8vICAgOiAnLydcclxuXHJcbi8vIFZpdGVwcmVzcyBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcclxuLy8gXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIFx1N0VFN1x1NjI3Rlx1NTM1QVx1NUJBMlx1NEUzQlx1OTg5OChAc3VnYXJhdC90aGVtZSlcclxuICBleHRlbmRzOiBibG9nVGhlbWUsXHJcbiAgYmFzZTogXCIvWkJsb2cvXCIsXHJcbiAgbGFuZzogXCJ6aC1jblwiLFxyXG4gIHRpdGxlOiBcIlp1b1wiLFxyXG4gIC8vIGRlc2NyaXB0aW9uOiBcIlx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENlx1NzY4NFx1NTM1QVx1NUJBMlx1NEUzQlx1OTg5OFx1RkYwQ1x1NTdGQVx1NEU4RSB2aXRlcHJlc3MgXHU1QjlFXHU3M0IwXCIsXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgLy8gXHU4QkU2XHU4OUMxXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3poL3JlZmVyZW5jZS9zaXRlLWNvbmZpZyNoZWFkXHJcbiAgaGVhZDogW1xyXG4gICAgLy8gXHU5MTREXHU3RjZFXHU3RjUxXHU3QUQ5XHU3Njg0XHU1NkZFXHU2ODA3XHVGRjA4XHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0IHRhYiBcdTRFMEFcdUZGMDlcclxuICAgIC8vIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6IGAke2Jhc2V9ZmF2aWNvbi5pY29gIH1dLCAvLyBcdTRGRUVcdTY1MzlcdTRFODYgYmFzZSBcdThGRDlcdTkxQ0NcdTRFNUZcdTk3MDBcdTg5ODFcdTU0MENcdTZCNjVcdTRGRUVcdTY1MzlcclxuICAgIFtcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9mYXZpY29uLmljb1wiIH1dLFxyXG4gIF0sXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIC8vIFx1NUM1NVx1NzkzQSAyLDMgXHU3RUE3XHU2ODA3XHU5ODk4XHU1NzI4XHU3NkVFXHU1RjU1XHU0RTJEXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGxldmVsOiBbMiwgM10sXHJcbiAgICAgIGxhYmVsOiBcIlx1NzZFRVx1NUY1NVwiLFxyXG4gICAgfSxcclxuICAgIC8vIFx1OUVEOFx1OEJBNFx1NjU4N1x1Njg0OFx1NEZFRVx1NjUzOVxyXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogXCJcdTU2REVcdTUyMzBcdTk4NzZcdTkwRThcIixcclxuICAgIHNpZGViYXJNZW51TGFiZWw6IFwiXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwXCIsXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU0RThFXCIsXHJcblxyXG4gICAgLy8gXHU4QkJFXHU3RjZFbG9nb1xyXG4gICAgbG9nbzogXCIvbG9nby5qcGdcIixcclxuICAgIC8vIGVkaXRMaW5rOiB7XHJcbiAgICAvLyAgIHBhdHRlcm46XHJcbiAgICAvLyAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BVFFRL3N1Z2FyLWJsb2cvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvZ3ByZXNzLzpwYXRoJyxcclxuICAgIC8vICAgdGV4dDogJ1x1NTNCQiBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU1MTg1XHU1QkI5J1xyXG4gICAgLy8gfSxcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6IFwiXHU5OTk2XHU5ODc1XCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgICAgIC8vIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTRGNUNcdTgwMDVcIiwgbGluazogXCJodHRwczovL3N1Z2FyYXQudG9wL2Fib3V0bWUuaHRtbFwiIH0sXHJcbiAgICBdLFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246IFwiZ2l0aHViXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQVRRUS9zdWdhci1ibG9nL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3RoZW1lXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHp1b1xcXFxaQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHp1b1xcXFxaQmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovenVvL1pCbG9nL2RvY3MvLnZpdGVwcmVzcy9ibG9nLXRoZW1lLnRzXCI7Ly8gXHU0RTNCXHU5ODk4XHU3MkVDXHU2NzA5XHU5MTREXHU3RjZFXHJcbmltcG9ydCB7IGdldFRoZW1lQ29uZmlnIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUvbm9kZSdcclxuXHJcbi8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVx1RkYwOFJTU1x1OTE0RFx1N0Y2RVx1RkYwOVxyXG4vLyBpbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUnXHJcblxyXG4vLyBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vc3VnYXJhdC50b3AnXHJcbi8vIGNvbnN0IFJTUzogVGhlbWUuUlNTT3B0aW9ucyA9IHtcclxuLy8gICB0aXRsZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXHJcbi8vICAgYmFzZVVybCxcclxuLy8gICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcclxuLy8gICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxyXG4vLyAgIGxhbmd1YWdlOiAnemgtY24nLFxyXG4vLyAgIGltYWdlOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcclxuLy8gICBmYXZpY29uOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9mYXZpY29uLmljbycsXHJcbi8vIH1cclxuXHJcbi8vIFx1NjI0MFx1NjcwOVx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1OEJFNlx1ODlDMVx1NjU4N1x1Njg2MzogaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9cclxuY29uc3QgYmxvZ1RoZW1lID0gZ2V0VGhlbWVDb25maWcoe1xyXG4gIC8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVxyXG4gIC8vIFJTUyxcclxuXHJcbiAgLy8gXHU2NDFDXHU3RDIyXHJcbiAgLy8gXHU5RUQ4XHU4QkE0XHU1RjAwXHU1NDJGcGFnZWZpbmRcdTc5QkJcdTdFQkZcdTc2ODRcdTUxNjhcdTY1ODdcdTY0MUNcdTdEMjJcdTY1MkZcdTYzMDFcdUZGMDhcdTU5ODJcdTRGN0ZcdTc1MjhcdTUxNzZcdTVCODNcdTc2ODRcdTUzRUZcdTRFRTVcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1RkYwOVxyXG4gIC8vIFx1NTk4Mlx1Njc5Q25weCBwYWdlZmluZCBcdTY1RjZcdTk1RjRcdThGQzdcdTk1N0ZcdUZGMENcdTUzRUZcdTRFRTVcdTYyNEJcdTUyQThcdTVDMDZcdTUxNzZcdTVCODlcdTg4QzVcdTRFM0FcdTk4NzlcdTc2RUVcdTRGOURcdThENTYgcG5wbSBhZGQgcGFnZWZpbmRcclxuICAvLyBzZWFyY2g6IGZhbHNlLFxyXG5cclxuICAvLyBcdTk4NzVcdTgxMUFcclxuICBmb290ZXI6IHtcclxuICAgIC8vIG1lc3NhZ2UgXHU1QjU3XHU2QkI1XHU2NTJGXHU2MzAxXHU5MTREXHU3RjZFXHU0RTNBSFRNTFx1NTE4NVx1NUJCOVx1RkYwQ1x1OTE0RFx1N0Y2RVx1NTkxQVx1Njc2MVx1NTNFRlx1NEVFNVx1OTE0RFx1N0Y2RVx1NEUzQVx1NjU3MFx1N0VDNFxyXG4gICAgLy8gbWVzc2FnZTogJ1x1NEUwQlx1OTc2MiBcdTc2ODRcdTUxODVcdTVCQjlcdTU0OENcdTU2RkVcdTY4MDdcdTkwRkRcdTY2MkZcdTUzRUZcdTRFRTVcdTRGRUVcdTY1MzlcdTc2ODRcdTU2NjJcdUZGMDhcdTVGNTNcdTcxMzZcdTY3MkNcdTY3NjFcdTUxODVcdTVCQjlcdTRFNUZcdTY2MkZcdTUzRUZcdTRFRTVcdTk2OTBcdTg1Q0ZcdTc2ODRcdUZGMDknLFxyXG4gICAgLy8gY29weXJpZ2h0OiAnTUlUIExpY2Vuc2UgfCBcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxyXG4gICAgLy8gaWNwUmVjb3JkOiB7XHJcbiAgICAvLyAgIG5hbWU6ICdcdTg3MDBJQ1BcdTU5MDcxOTAxMTcyNFx1NTNGNycsXHJcbiAgICAvLyAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcclxuICAgIC8vIH0sXHJcbiAgICAvLyBzZWN1cml0eVJlY29yZDoge1xyXG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxyXG4gICAgLy8gICBsaW5rOiAnaHR0cHM6Ly93d3cuYmVpYW4uZ292LmNuL3BvcnRhbC9pbmRleC5kbydcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU0RTNCXHU5ODk4XHU4MjcyXHU0RkVFXHU2NTM5XHJcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxyXG5cclxuICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcclxuICBhdXRob3I6ICdadW8nLFxyXG5cclxuICAvLyBcdTUzQ0JcdTk0RkVcclxuICBmcmllbmQ6IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgbmlja25hbWU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxyXG4gICAgLy8gICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxyXG4gICAgLy8gICBhdmF0YXI6XHJcbiAgICAvLyAgICAgJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXHJcbiAgICAvLyAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxyXG4gICAgLy8gfSxcclxuICAgIHtcclxuICAgICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxyXG4gICAgICBkZXM6ICdWaXRlICYgVnVlIFBvd2VyZWQgU3RhdGljIFNpdGUgR2VuZXJhdG9yJyxcclxuICAgICAgYXZhdGFyOlxyXG4gICAgICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nLFxyXG4gICAgfSxcclxuICBdLFxyXG5cclxuICAvLyBcdTUxNkNcdTU0NEFcclxuICAvLyBwb3BvdmVyOiB7XHJcbiAgLy8gICB0aXRsZTogJ1x1NTE2Q1x1NTQ0QScsXHJcbiAgLy8gICBib2R5OiBbXHJcbiAgLy8gICAgIHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiAnXHVEODNEXHVEQzQ3XHU1MTZDXHU0RjE3XHU1M0Y3XHVEODNEXHVEQzQ3LS0tXHVEODNEXHVEQzQ3IFx1NUZBRVx1NEZFMSBcdUQ4M0RcdURDNDcnIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gIC8vICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFl4TlRBeE9EYzJOVEl4TUE9PTYxNTAxODc2NTIxMH5mbXQud2VicCdcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAvLyAgICAgICBjb250ZW50OiAnXHU2QjIyXHU4RkNFXHU1OTI3XHU1QkI2XHU1MkEwXHU3RkE0Jlx1NzlDMVx1NEZFMVx1NEVBNFx1NkQ0MSdcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAvLyAgICAgICBjb250ZW50OiAnXHU2NTg3XHU3QUUwXHU5OTk2L1x1NjU4N1x1NUMzRVx1NjcwOVx1N0ZBNFx1NEU4Q1x1N0VGNFx1NzgwMScsXHJcbiAgLy8gICAgICAgc3R5bGU6ICdwYWRkaW5nLXRvcDowJ1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgLy8gICAgICAgY29udGVudDogJ1x1NEY1Q1x1ODAwNVx1NTM1QVx1NUJBMicsXHJcbiAgLy8gICAgICAgbGluazogJ2h0dHBzOi8vc3VnYXJhdC50b3AnXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAvLyAgICAgICBjb250ZW50OiAnXHU1MkEwXHU3RkE0XHU0RUE0XHU2RDQxJyxcclxuICAvLyAgICAgICBwcm9wczoge1xyXG4gIC8vICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBsaW5rOiAnaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9ncm91cC5odG1sJyxcclxuICAvLyAgICAgfVxyXG4gIC8vICAgXSxcclxuICAvLyAgIGR1cmF0aW9uOiAwXHJcbiAgLy8gfSxcclxufSlcclxuXHJcbmV4cG9ydCB7IGJsb2dUaGVtZSB9XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7OztBQ0NyUyxTQUFTLHNCQUFzQjtBQWlCL0IsSUFBTSxZQUFZLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVS9CLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFZUjtBQUFBO0FBQUEsRUFHQSxZQUFZO0FBQUE7QUFBQSxFQUdaLFFBQVE7QUFBQTtBQUFBLEVBR1IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRTjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsUUFDRTtBQUFBLE1BQ0YsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQ0YsQ0FBQzs7O0FEdkZELElBQU8saUJBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBO0FBQUEsRUFFUCxhQUFhO0FBQUE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFHSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsYUFBYTtBQUFBO0FBQUEsSUFFWCxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUEsSUFFQSxrQkFBa0I7QUFBQSxJQUNsQixrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQTtBQUFBLElBR2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNTixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUE7QUFBQSxJQUUxQjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
