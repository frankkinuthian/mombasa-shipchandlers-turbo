import * as LucideIcons from "lucide-react";

export interface NavItem {
  label: string;
  url: string;
  icon?: string;
  group?: string;
  roles?: string[];
  order?: number;
}

export interface NavigationConfig {
  id: string;
  title?: string;
  items: NavItem[];
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Home: LucideIcons.Home,
  Package: LucideIcons.Package,
  FileText: LucideIcons.FileText,
  Ship: LucideIcons.Ship,
  BookOpen: LucideIcons.BookOpen,
  Warehouse: LucideIcons.Warehouse,
  Truck: LucideIcons.Truck,
  BarChart3: LucideIcons.BarChart3,
  FolderOpen: LucideIcons.FolderOpen,
  Settings: LucideIcons.Settings,
  HelpCircle: LucideIcons.HelpCircle,
  Search: LucideIcons.Search,
};

export function getIconComponent(iconName?: string) {
  if (!iconName) return LucideIcons.Circle;
  return iconMap[iconName] || LucideIcons.Circle;
}

export function groupNavigationItems(items: NavItem[]) {
  const ungrouped: NavItem[] = [];
  const grouped: Record<string, NavItem[]> = {};

  items.forEach((item) => {
    if (item.group) {
      if (!grouped[item.group]) {
        grouped[item.group] = [];
      }
      grouped[item.group].push(item);
    } else {
      ungrouped.push(item);
    }
  });

  return { ungrouped, grouped };
}
