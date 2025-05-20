import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Tienda from "@/pages/Tienda";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Exportacion from "@/pages/Exportacion";
import HassExportacion from "@/pages/exportacion/Hass";
import FuerteExportacion from "@/pages/exportacion/Fuerte";
import ProcesoExportacion from "@/pages/exportacion/Proceso";
import Certificaciones from "@/pages/exportacion/Certificaciones";
import StaticChatBubble from "@/components/StaticChatBubble";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tienda" component={Tienda} />
      <Route path="/nosotros" component={() => <Home section="about" />} />
      <Route path="/productos" component={() => <Home section="products" />} />
      <Route path="/beneficios" component={() => <Home section="benefits" />} />
      <Route path="/galeria" component={() => <Home section="gallery" />} />
      <Route path="/contacto" component={() => <Home section="contact" />} />

      {/* Rutas de exportación */}
      <Route path="/exportacion" component={Exportacion} />
      <Route path="/exportacion/hass" component={HassExportacion} />
      <Route path="/exportacion/fuerte" component={FuerteExportacion} />
      <Route path="/exportacion/proceso" component={ProcesoExportacion} />
      <Route path="/exportacion/certificaciones" component={Certificaciones} />

      {/* Rutas del blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/categoria/:category" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <StaticChatBubble />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
