# 🚀 Euphoria Landings Control Center

Euphoria Ops — bu 14 ta landing sahifasini markazlashgan holda boshqarish tizimi. Loyiha Docker orqali to'liq izolyatsiya qilingan va CI/CD bilan avtomatlashtirilgan.

---

## 🏗 Infratuzilma Arxitekturasi

Tizim quyidagi texnologiyalar asosida qurilgan:

* **Virtual Server:** Hetzner Cloud (Ubuntu 22.04 LTS)
* **Orkestratsiya:** Docker Compose (v3.8)
* **Monitoring:** Custom Dashboard (MUI Joy UI dizayni)
* **Deployment:** GitHub Actions (SSH orqali Auto-deploy)



---

## 📊 Monitoring Dashboard

<!-- Dashboard serverning asosiy IP manzilida joylashgan: `http://95.217.191.63/` -->

### 🔹 Asosiy imkoniyatlari:
1.  **Real-time Status:** Konteynerlar holatini (RUNNING/STOPPED) real vaqtda kuzatish.
2.  **Quick Access:** "OCHISH" tugmasi orqali har bir landing sahifasiga to'g'ridan-to'g'ri o'tish.
3.  **Visual Sync:** Ma'lumotlar yangilanganda yuqorida neon-progress bar paydo bo'ladi.
4.  **Dark Focus:** Faqat Expert-level OLED qora rejimda ishlaydi.

---

## 🚀 Portlar Xaritasi (Network Map)

| Loyiha Nomi | Port | Holati |
| :--- | :--- | :--- |
| **🌐 Dashboard** | **80** | **Asosiy kirish** |
| 💊 Artrowell | 3001 | Landing Page |
| 🫀 Cardio-Balance | 3002 | Landing Page |
| 🧴 Dermozil | 3003 | Landing Page |
| 🧪 Diabetikforte | 3004 | Landing Page |
| 💧 Diastop | 3005 | Landing Page |
| ⚡️ Fatality | 3006 | Landing Page |
| 🩸 Gemo-Plus | 3007 | Landing Page |
| 🩺 Gipertofort | 3008 | Landing Page |
| 🐛 Parazit-Off | 3009 | Landing Page |
| 🏃‍♂️ Slimfit | 3010 | Landing Page |
| 🦴 Sustaflex | 3011 | Landing Page |
| 🚽 Urion | 3012 | Landing Page |
| 🚻 Uro-Pro | 3013 | Landing Page |
| 👁 Visucaps | 3014 | Landing Page |

---

## 🛠 Texnik Sozlamalar va Buyruqlar

### ✅ Status Generatorni yoqish
Dashboard ishlashi uchun serverda quyidagi skript fonda (background) bo'lishi shart:
```bash
nohup sh -c 'while true; do docker ps -a --filter "name=euphoria-lands" --format "{\"name\":\"{{.Names}}\", \"status\":\"{{.Status}}\"}" | jq -s "." > /home/deploy/euphoria-landings/data.json; sleep 10; done' > /dev/null 2>&1 &

✅ CI/CD Workflow
Loyihani yangilash jarayoni:

Localda kodni o'zgartiring.

git push origin main buyrug'ini bering.

GitHub Actions avtomatik ravishda serverni yangilaydi.

🛡 Xavfsizlik va Cheklovlar
Har bir konteyner uchun quyidagi resurs limitlari o'rnatilgan:

CPU: Max 0.50 core.

Memory: Max 512MB.

UFW Firewall: Faqat 80, 22 va 3001-3014 portlar ochiq.

v1.0.4 • 2026 Stable Edition