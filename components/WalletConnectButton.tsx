```tsx
'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { cn } from '@/lib/utils'

interface WalletConnectButtonProps {
  className?: string
}

export default function WalletConnectButton({ className }: WalletConnectButtonProps) {
  return (
    <WalletMultiButton
      className={cn(
        "!bg-purple-600 hover:!bg-purple-700 !text-white !font-medium !rounded-lg !px-6 !py-3 !transition-colors !duration-200 !border-0 !outline-none focus:!ring-2 focus:!ring-purple-500 focus:!ring-offset-2 focus:!ring-offset-gray-50",
        "!font-inter !text-sm",
        "disabled:!opacity-50 disabled:!cursor-not-allowed",
        className
      )}
    />
  )
}
```