import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import Image from 'next/image';
import ThemeLightIcon from '@/shared/assets/icons/them-light.svg'
import ThemeDarkIcon from '@/shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps)  => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK ? 
                <ThemeLightIcon /> : 
                <ThemeDarkIcon />
            }
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';