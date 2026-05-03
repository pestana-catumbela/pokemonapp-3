import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/theme-context';

export default function Layout() {
    return (
        <ThemeProvider>
            <Stack />
        </ThemeProvider>
    );
};
