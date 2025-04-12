<template>
  <button
    :class="[
      'rounded font-semibold transition-colors duration-200 items-center justify-center gap-2',
      sizeClasses,
      colorClasses,
      variantClasses,
      block ? 'w-full' : 'inline-flex'
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  color?: 'primary' | 'accent' | 'warning' | 'danger' | 'neutral',
  variant?: 'solid' | 'outline' | 'ghost',
  size?: 'sm' | 'md' | 'lg',
  block?: boolean
}

const {
  block = false,
  color = 'primary',
  size = 'md',
  variant = 'solid'
} = defineProps<ButtonProps>()

const sizeClasses = computed(() => {
  return {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
  }[size]
})

const colorMap: Record<string, string> = {
  primary: 'primary',
  accent: 'accent',
  warning: 'yellow-500',
  danger: 'red-500',
  neutral: 'gray-600',
}

const computedColor = computed(() => colorMap[color] || 'primary')

const colorClasses = computed(() => {
  const base = computedColor.value
  return {
    solid: `bg-${base} text-white hover:bg-${base}/90`,
    outline: `border border-${base} text-${base} hover:bg-${base}/10`,
    ghost: `text-${base} hover:bg-${base}/10`,
  }[variant]
})

const variantClasses = computed(() => {
  return {
    solid: '',
    outline: 'bg-transparent',
    ghost: 'bg-transparent border-transparent',
  }[variant]
})
</script>
