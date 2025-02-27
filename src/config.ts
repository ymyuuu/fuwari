import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Fuwari',
  subtitle: 'Demo Site',
  lang: 'zh_CN',         // 可选语言: 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 345,         // 主题颜色的默认色调，范围从 0 到 360，例如红色: 0, 青色: 200, 蓝绿色: 250, 粉色: 345
    fixed: false,     // 是否隐藏访客的主题颜色选择器
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // 相对于 /src 目录；若以 '/' 开头，则相对于 /public 目录
    position: 'center',      // 等同于 CSS 的 object-position，仅支持 'top'、'center'、'bottom'，默认为 'center'
    credit: {
      enable: false,         // 是否显示横幅图片的版权信息
      text: '',              // 显示的版权文字
      url: ''                // （可选）原始作品或艺术家页面的链接
    }
  },
  toc: {
    enable: true,           // 是否在文章右侧显示目录
    depth: 2                // 目录显示的最大标题层级，范围从 1 到 3
  },
  favicon: [    // 若此数组为空，则使用默认的 favicon
    // {
    //   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
    //   theme: 'light',              // （可选）'light' 或 'dark'，仅在有不同主题的 favicon 时设置
    //   sizes: '32x32',              // （可选）favicon 的尺寸，当有不同尺寸的 favicon 时设置
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // 内部链接无需包含基础路径，系统会自动添加
      external: true,                               // 显示外部链接图标，并在新标签页中打开链接
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // 相对于 /src 目录；若以 '/' 开头，则相对于 /public 目录
  name: 'Lorem Ipsum',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // 参见 https://icones.js.org/ 获取图标代码
                                        // 若未安装相应的图标集，请执行 `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
