import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Sejarah from "./pages/Sejarah.jsx";
import VisiMisi from "./pages/VisiMisi.jsx";
import StrukturOrganisasi from "./pages/StrukturOrganisasi.jsx";
import LayananJasa from "./pages/LayananJasa.jsx";
import LayananBarang from "./pages/LayananBarang.jsx";
import DataLegal from "./pages/DataLegal.jsx";
import LandasanHukum from "./pages/LandasanHukum.jsx";
import Galeri from "./pages/Galeri.jsx";
import Kontak from "./pages/Kontak.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami/sejarah" element={<Sejarah />} />
        <Route path="/tentang-kami/visi-misi" element={<VisiMisi />} />
        <Route
          path="/tentang-kami/struktur-organisasi"
          element={<StrukturOrganisasi />}
        />
        <Route path="/layanan/jasa" element={<LayananJasa />} />
        <Route path="/layanan/barang" element={<LayananBarang />} />
        <Route path="/publikasi/data-legal" element={<DataLegal />} />
        <Route path="/publikasi/landasan-hukum" element={<LandasanHukum />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
