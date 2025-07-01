import { NavigateFunction } from 'react-router-dom'

export const createSectionNavigator = (
  navigate: NavigateFunction,
  currentPath: string
) => {
  const navigateToSection = (sectionId: string): void => {
    if (currentPath !== '/') {
      // Nếu không ở trang chủ, chuyển về trang chủ trước
      navigate('/')
      setTimeout(() => {
        scrollToSectionWithOffset(sectionId)
      }, 100)
    } else {
      // Nếu đã ở trang chủ, scroll trực tiếp
      scrollToSectionWithOffset(sectionId)
    }
  }

  const scrollToSectionWithOffset = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const offset = 20
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return {
    navigateToSection
  }
}

// Specific navigation functions for each service
export const createServiceNavigators = (
  navigate: NavigateFunction,
  currentPath: string
) => {
  const { navigateToSection } = createSectionNavigator(navigate, currentPath)

  return {
    scrollToProcess: () => navigateToSection('process'),
    scrollToTaxConsulting: () => navigateToSection('tax-consulting'),
    scrollToItinSupport: () => navigateToSection('itin-support')
  }
}