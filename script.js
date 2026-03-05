/* ========== VoiU Nails - Main Script ========== */
(function () {
    'use strict';

    // ==================== TRANSLATIONS ====================
    const translations = {
        vi: {
            nav_home: 'Trang chủ', nav_menu: 'Bảng giá', nav_gallery: 'Bộ sưu tập',
            nav_booking: 'Đặt lịch', nav_contact: 'Liên hệ',
            hero_subtitle: '✨ Chào mừng đến với', hero_title1: 'VoiU Nails',
            hero_title2: 'Tỏa Sáng Phong Cách Riêng',
            hero_desc: 'Dịch vụ nail chuyên nghiệp — Mẫu hot trend Việt Nam — Đặt lịch dễ dàng',
            hero_cta: '💅 Đặt Lịch Ngay', hero_cta2: '📋 Xem Bảng Giá',
            stat_clients: 'Khách hàng', stat_designs: 'Mẫu thiết kế', stat_rating: 'Đánh giá',
            menu_tag: '💎 Dịch vụ & Bảng giá', menu_title: 'Bảng Giá Dịch Vụ',
            menu_desc: 'Chọn dịch vụ phù hợp với phong cách của bạn',
            cat_manicure: '💅 Manicure', cat_pedicure: '🦶 Pedicure',
            cat_nailart: '🎨 Nail Art', cat_mi: '👁️ Mi', cat_extensions: '✨ Extensions', cat_care: '🧴 Chăm sóc',
            gallery_tag: '🌟 Bộ sưu tập', gallery_title: 'Mẫu Nail Hot Trend',
            gallery_desc: 'Những mẫu nail đang thịnh hành nhất Việt Nam 2026',
            filter_all: 'Tất cả', filter_trendy: '🔥 Hot Trend', filter_elegant: '👑 Sang trọng',
            filter_cute: '🎀 Dễ thương', filter_minimalist: '✨ Tối giản', filter_bold: '💥 Cá tính',
            filter_french: '💅 French',
            filter_mi: '👁️ Mi',
            filter_tay: '🤚 Nail Tay',
            filter_chan: '🦶 Nail Chân',
            load_more: 'Xem thêm mẫu',
            booking_tag: '📅 Đặt lịch hẹn', booking_title: 'Đặt Lịch Ngay',
            booking_desc: 'Chọn dịch vụ yêu thích và đặt lịch hẹn dễ dàng',
            form_name: 'Họ và tên *', form_phone: 'Số điện thoại *',
            form_service: 'Chọn dịch vụ *', form_date: 'Ngày hẹn *', form_time: 'Giờ hẹn *',
            form_note: 'Ghi chú', form_submit: '📅 Xác Nhận Đặt Lịch',
            form_name_ph: 'Nhập tên của bạn', form_phone_ph: '0912 345 678',
            form_service_ph: '-- Chọn dịch vụ --', form_note_ph: 'Yêu cầu đặc biệt...',
            history_title: '📋 Lịch Hẹn Của Bạn', no_bookings: 'Chưa có lịch hẹn nào',
            footer_about: 'Tiệm nail cao cấp với đội ngũ thợ chuyên nghiệp, mẫu nail hot trend, dịch vụ tận tâm.',
            footer_hours_title: 'Giờ làm việc', footer_hours: 'T2 - CN: 9:00 - 20:00',
            footer_address: 'Đường số 22B, B7-14, KDC 586, P. Phú Thứ, Q. Cái Răng, Cần Thơ',
            stat_visits: 'Lượt truy cập',
            footer_social_title: 'Theo dõi chúng tôi',
            bottom_call: 'Gọi', bottom_menu: 'Bảng giá', bottom_book: 'Đặt lịch', bottom_gallery: 'Mẫu nail',
            modal_success_title: 'Đặt Lịch Thành Công!',
            modal_success_desc: 'Chúng tôi sẽ liên hệ bạn để xác nhận lịch hẹn.',
            modal_ok: 'OK',
            toast_booked: '✅ Đặt lịch thành công!', toast_deleted: '🗑️ Đã xóa lịch hẹn',
            toast_error: '⚠️ Vui lòng điền đầy đủ thông tin',
            tag_hot: '🔥 Nổi bật', tag_new: '✨ Mới', tag_vip: '👑 VIP',
            combo_label: 'COMBO', detail_show: '📋 Xem chi tiết giá ▼', detail_hide: '📋 Ẩn chi tiết ▲',
            price_total: 'Tổng lẻ', price_combo: '🎁 Giá combo',
        },
        en: {
            nav_home: 'Home', nav_menu: 'Pricing', nav_gallery: 'Gallery',
            nav_booking: 'Book Now', nav_contact: 'Contact',
            hero_subtitle: '✨ Welcome to', hero_title1: 'VoiU Nails',
            hero_title2: 'Shine Your Own Style',
            hero_desc: 'Professional nail services — Trending designs in Vietnam — Easy online booking',
            hero_cta: '💅 Book Now', hero_cta2: '📋 View Pricing',
            stat_clients: 'Clients', stat_designs: 'Designs', stat_rating: 'Rating',
            menu_tag: '💎 Services & Pricing', menu_title: 'Service Price List',
            menu_desc: 'Choose the perfect service for your style',
            cat_manicure: '💅 Manicure', cat_pedicure: '🦶 Pedicure',
            cat_nailart: '🎨 Nail Art', cat_mi: '👁️ Eyelash', cat_extensions: '✨ Extensions', cat_care: '🧴 Care',
            gallery_tag: '🌟 Collection', gallery_title: 'Trending Nail Designs',
            gallery_desc: 'The hottest nail trends in Vietnam 2026',
            filter_all: 'All', filter_trendy: '🔥 Trending', filter_elegant: '👑 Elegant',
            filter_cute: '🎀 Cute', filter_minimalist: '✨ Minimal', filter_bold: '💥 Bold',
            filter_french: '💅 French',
            filter_mi: '👁️ Eyelash',
            filter_tay: '🤚 Hand Nails',
            filter_chan: '🦶 Foot Nails',
            load_more: 'Load more',
            booking_tag: '📅 Book Appointment', booking_title: 'Book Now',
            booking_desc: 'Choose your favorite service and book easily',
            form_name: 'Full Name *', form_phone: 'Phone Number *',
            form_service: 'Select Service *', form_date: 'Date *', form_time: 'Time *',
            form_note: 'Notes', form_submit: '📅 Confirm Booking',
            form_name_ph: 'Enter your name', form_phone_ph: '0912 345 678',
            form_service_ph: '-- Select service --', form_note_ph: 'Special requests...',
            history_title: '📋 Your Bookings', no_bookings: 'No bookings yet',
            footer_about: 'Premium nail salon with professional artists, trending designs, and dedicated service.',
            footer_hours_title: 'Working Hours', footer_hours: 'Mon - Sun: 9:00 - 20:00',
            footer_address: '22B Street, B7-14, KDC 586, Phu Thu Ward, Cai Rang Dist., Can Tho',
            stat_visits: 'Visits',
            footer_social_title: 'Follow Us',
            bottom_call: 'Call', bottom_menu: 'Pricing', bottom_book: 'Book', bottom_gallery: 'Designs',
            modal_success_title: 'Booking Confirmed!',
            modal_success_desc: 'We will contact you to confirm your appointment.',
            modal_ok: 'OK',
            toast_booked: '✅ Booking confirmed!', toast_deleted: '🗑️ Booking deleted',
            toast_error: '⚠️ Please fill in all required fields',
            tag_hot: '🔥 HOT', tag_new: '✨ NEW', tag_vip: '👑 VIP',
            combo_label: 'COMBO', detail_show: '📋 View price details ▼', detail_hide: '📋 Hide details ▲',
            price_total: 'Subtotal', price_combo: '🎁 Combo price',
        },
        ja: {
            nav_home: 'ホーム', nav_menu: '料金表', nav_gallery: 'ギャラリー',
            nav_booking: '予約', nav_contact: 'お問合せ',
            hero_subtitle: '✨ ようこそ', hero_title1: 'VoiU Nails',
            hero_title2: '自分らしく輝こう',
            hero_desc: 'プロのネイルサービス — ベトナムのトレンドデザイン — 簡単オンライン予約',
            hero_cta: '💅 今すぐ予約', hero_cta2: '📋 料金を見る',
            stat_clients: 'お客様', stat_designs: 'デザイン', stat_rating: '評価',
            menu_tag: '💎 メニュー＆料金', menu_title: 'サービス料金表',
            menu_desc: 'あなたのスタイルに合ったサービスを選んでください',
            cat_manicure: '💅 マニキュア', cat_pedicure: '🦶 ペディキュア',
            cat_nailart: '🎨 ネイルアート', cat_mi: '👁️ まつエク', cat_extensions: '✨ エクステ', cat_care: '🧴 ケア',
            gallery_tag: '🌟 コレクション', gallery_title: 'トレンドネイルデザイン',
            gallery_desc: '2026年ベトナムで最も人気のネイルトレンド',
            filter_all: 'すべて', filter_trendy: '🔥 トレンド', filter_elegant: '👑 エレガント',
            filter_cute: '🎀 キュート', filter_minimalist: '✨ ミニマル', filter_bold: '💥 ボールド',
            filter_french: '💅 フレンチ',
            filter_mi: '👁️ まつエク',
            filter_tay: '🤚 ハンドネイル',
            filter_chan: '🦶 フットネイル',
            load_more: 'もっと見る',
            booking_tag: '📅 ご予約', booking_title: '今すぐ予約',
            booking_desc: 'お好みのサービスを選んで簡単に予約',
            form_name: 'お名前 *', form_phone: '電話番号 *',
            form_service: 'サービス選択 *', form_date: '日付 *', form_time: '時間 *',
            form_note: 'メモ', form_submit: '📅 予約を確認',
            form_name_ph: 'お名前を入力', form_phone_ph: '0912 345 678',
            form_service_ph: '-- サービスを選択 --', form_note_ph: '特別なご要望...',
            history_title: '📋 ご予約一覧', no_bookings: 'まだ予約がありません',
            footer_about: 'プロのネイリスト、トレンドデザイン、心を込めたサービスの高級ネイルサロン。',
            footer_hours_title: '営業時間', footer_hours: '月〜日: 9:00 - 20:00',
            footer_address: '22B通り、B7-14、KDC 586、フートゥー区、カイラン区、カントー市',
            stat_visits: 'アクセス数',
            footer_social_title: 'フォローする',
            bottom_call: '電話', bottom_menu: '料金', bottom_book: '予約', bottom_gallery: 'デザイン',
            modal_success_title: '予約完了！',
            modal_success_desc: '確認のためご連絡いたします。',
            modal_ok: 'OK',
            toast_booked: '✅ 予約完了！', toast_deleted: '🗑️ 予約を削除しました',
            toast_error: '⚠️ すべての必須項目を入力してください',
            tag_hot: '🔥 人気', tag_new: '✨ 新着', tag_vip: '👑 VIP',
            combo_label: 'コンボ', detail_show: '📋 料金詳細を見る ▼', detail_hide: '📋 詳細を隠す ▲',
            price_total: '合計', price_combo: '🎁 コンボ価格',
        }
    };

    // ==================== MENU DATA ====================
    const menuData = {
        manicure: [
            { name: { vi: 'Sơn gel cơ bản', en: 'Basic Gel Polish', ja: 'ベーシックジェル' }, price: '150.000đ', priceUSD: '$6', time: '45 phút', desc: { vi: 'Sơn gel 1 màu, bền đẹp 3-4 tuần', en: 'Single color gel, lasts 3-4 weeks', ja: 'ワンカラージェル、3〜4週間持続' } },
            { name: { vi: 'Sơn gel cao cấp', en: 'Premium Gel Polish', ja: 'プレミアムジェル' }, price: '200.000đ', priceUSD: '$8', time: '60 phút', desc: { vi: 'Sơn gel cao cấp, bóng mượt lâu trôi', en: 'Premium gel, glossy long-lasting', ja: '高級ジェル、光沢長持ち' } },
            { name: { vi: 'Manicure cơ bản', en: 'Basic Manicure', ja: 'ベーシックマニキュア' }, price: '100.000đ', priceUSD: '$4', time: '30 phút', desc: { vi: 'Cắt da, dũa móng, dưỡng ẩm', en: 'Cuticle care, shaping, moisturizing', ja: 'キューティクルケア、整形、保湿' } },
            { name: { vi: 'Manicure VIP', en: 'VIP Manicure', ja: 'VIPマニキュア' }, price: '350.000đ', priceUSD: '$14', time: '90 phút', desc: { vi: 'Bao gồm massage tay, mask dưỡng da', en: 'Includes hand massage & skin mask', ja: 'ハンドマッサージ＆スキンマスク付き' }, details: [{ n: 'Sơn gel cao cấp', p: '200.000đ' }, { n: 'Cắt da, dũa móng', p: '100.000đ' }, { n: 'Massage tay tinh dầu', p: '80.000đ' }, { n: 'Mask dưỡng da tay', p: '70.000đ' }], originalPrice: '450.000đ', discount: '-22%' },
            { name: { vi: 'Tháo gel cũ', en: 'Gel Removal', ja: 'ジェルオフ' }, price: '50.000đ', priceUSD: '$2', time: '20 phút', desc: { vi: 'Tháo gel an toàn, không hại móng', en: 'Safe gel removal, nail-friendly', ja: '安全なジェルオフ' } },
        ],
        pedicure: [
            { name: { vi: 'Pedicure cơ bản', en: 'Basic Pedicure', ja: 'ベーシックペディキュア' }, price: '150.000đ', priceUSD: '$6', time: '45 phút', desc: { vi: 'Ngâm chân, cắt da, sơn đơn', en: 'Foot soak, cuticle care, polish', ja: 'フットバス、ケア、ポリッシュ' } },
            { name: { vi: 'Pedicure spa', en: 'Spa Pedicure', ja: 'スパペディキュア' }, price: '300.000đ', priceUSD: '$12', time: '75 phút', desc: { vi: 'Ngâm thảo dược, tẩy tế bào chết, massage', en: 'Herbal soak, scrub, massage', ja: 'ハーブソーク、スクラブ、マッサージ' }, details: [{ n: 'Ngâm thảo dược', p: '80.000đ' }, { n: 'Tẩy tế bào chết', p: '70.000đ' }, { n: 'Cắt da, dũa móng', p: '80.000đ' }, { n: 'Massage chân', p: '100.000đ' }, { n: 'Sơn gel chân', p: '50.000đ' }], originalPrice: '380.000đ', discount: '-21%' },
            { name: { vi: 'Sơn gel chân', en: 'Toe Gel Polish', ja: 'フットジェル' }, price: '180.000đ', priceUSD: '$7', time: '50 phút', desc: { vi: 'Sơn gel cho ngón chân, bền đẹp', en: 'Gel polish for toes, long-lasting', ja: 'フットジェルポリッシュ' } },
            { name: { vi: 'Pedicure VIP', en: 'VIP Pedicure', ja: 'VIPペディキュア' }, price: '450.000đ', priceUSD: '$18', time: '100 phút', desc: { vi: 'Trọn gói chăm sóc chân cao cấp', en: 'Full premium foot care package', ja: 'フルプレミアムフットケア' }, details: [{ n: 'Ngâm thảo dược cao cấp', p: '100.000đ' }, { n: 'Tẩy tế bào chết', p: '70.000đ' }, { n: 'Cắt da, dũa móng', p: '80.000đ' }, { n: 'Massage chân tinh dầu', p: '120.000đ' }, { n: 'Mask ủ dưỡng chân', p: '80.000đ' }, { n: 'Sơn gel cao cấp', p: '100.000đ' }], originalPrice: '550.000đ', discount: '-18%' },
        ],
        nailart: [
            { name: { vi: 'Vẽ hoa đơn giản', en: 'Simple Floral Art', ja: 'シンプルフラワーアート' }, price: '30.000đ/ngón', priceUSD: '$1.2/nail', time: '+10 phút', desc: { vi: 'Vẽ hoa, lá trang trí nhẹ nhàng', en: 'Delicate flower & leaf design', ja: '繊細な花と葉のデザイン' } },
            { name: { vi: 'Nail art trendy', en: 'Trendy Nail Art', ja: 'トレンドネイルアート' }, price: '50.000đ/ngón', priceUSD: '$2/nail', time: '+15 phút', desc: { vi: 'Mẫu hot trend: caro, marble, ombre...', en: 'Hot trends: check, marble, ombre...', ja: 'チェック、マーブル、オンブレ...' } },
            { name: { vi: 'Đính đá/charm', en: 'Crystal & Charms', ja: 'クリスタル＆チャーム' }, price: '20.000đ/viên', priceUSD: '$0.8/pc', time: '+5 phút', desc: { vi: 'Đá pha lê, charm 3D các loại', en: 'Crystal stones, 3D charms', ja: 'クリスタルストーン、3Dチャーム' } },
            { name: { vi: 'Vẽ tay nghệ thuật', en: 'Hand-painted Art', ja: 'ハンドペイントアート' }, price: '80.000đ/ngón', priceUSD: '$3.2/nail', time: '+20 phút', desc: { vi: 'Vẽ tay phức tạp, tùy chỉnh theo yêu cầu', en: 'Complex hand-painted, custom design', ja: '複雑なハンドペイント、カスタムデザイン' } },
            { name: { vi: 'Foil/Chrome/Cat eye', en: 'Foil/Chrome/Cat Eye', ja: 'フォイル/クローム/キャットアイ' }, price: '40.000đ/ngón', priceUSD: '$1.6/nail', time: '+10 phút', desc: { vi: 'Hiệu ứng gương, mắt mèo, foil vàng', en: 'Mirror, cat eye, gold foil effects', ja: 'ミラー、キャットアイ、ゴールドフォイル' } },
        ],
        mi: [
            { name: { vi: 'Nối mi classic', en: 'Classic Lash Extensions', ja: 'クラシックまつエク' }, price: '200.000đ', priceUSD: '$8', time: '60 phút', desc: { vi: 'Nối mi 1:1, tự nhiên thanh lịch', en: 'One-to-one lash, natural elegant look', ja: '1本1本の自然なまつエク' } },
            { name: { vi: 'Nối mi volume 2D-3D', en: 'Volume 2D-3D Lashes', ja: 'ボリューム2D-3Dまつエク' }, price: '300.000đ', priceUSD: '$12', time: '90 phút', desc: { vi: 'Mi dày tự nhiên, tôn đôi mắt', en: 'Natural volume, enhance your eyes', ja: 'ナチュラルボリューム' } },
            { name: { vi: 'Nối mi mega volume 5D', en: 'Mega Volume 5D Lashes', ja: 'メガボリューム5Dまつエク' }, price: '450.000đ', priceUSD: '$18', time: '120 phút', desc: { vi: 'Mi siêu dày, hiệu ứng dramatic', en: 'Super thick, dramatic effect', ja: '超厚みのドラマチック効果' } },
            { name: { vi: 'Mi cat eye', en: 'Cat Eye Lashes', ja: 'キャットアイまつエク' }, price: '350.000đ', priceUSD: '$14', time: '90 phút', desc: { vi: 'Đuôi mắt kéo dài, quyến rũ', en: 'Elongated outer corner, seductive', ja: '目尻を伸ばしたセクシーなスタイル' } },
            { name: { vi: 'Mi doll eye', en: 'Doll Eye Lashes', ja: 'ドールアイまつエク' }, price: '350.000đ', priceUSD: '$14', time: '90 phút', desc: { vi: 'Mắt tròn to, dễ thương ngây thơ', en: 'Wide round eyes, cute innocent look', ja: '丸くてかわいい目元' } },
            { name: { vi: 'Mi fox eye', en: 'Fox Eye Lashes', ja: 'フォックスアイまつエク' }, price: '380.000đ', priceUSD: '$15', time: '90 phút', desc: { vi: 'Đuôi mắt nhấn mạnh, trendy', en: 'Accentuated outer corner, trendy', ja: '目尻を強調したトレンディスタイル' } },
            { name: { vi: 'Mi wet look', en: 'Wet Look Lashes', ja: 'ウェットルックまつエク' }, price: '320.000đ', priceUSD: '$13', time: '80 phút', desc: { vi: 'Hiệu ứng mi ướt bóng mượt', en: 'Glossy wet lash effect', ja: 'ツヤ感のあるウェットエフェクト' } },
            { name: { vi: 'Mi màu nâu/tím', en: 'Colored Lashes (Brown/Purple)', ja: 'カラーまつエク（ブラウン/パープル）' }, price: '350.000đ', priceUSD: '$14', time: '90 phút', desc: { vi: 'Mi màu thời trang, cá tính', en: 'Fashion colored lashes, unique style', ja: 'ファッションカラーまつエク' } },
            { name: { vi: 'Mi kim cương', en: 'Diamond Crystal Lashes', ja: 'ダイヤモンドまつエク' }, price: '500.000đ', priceUSD: '$20', time: '100 phút', desc: { vi: 'Đính đá pha lê lấp lánh', en: 'Crystal rhinestone accents', ja: 'クリスタルラインストーン付き' } },
            { name: { vi: 'Tháo mi cũ', en: 'Lash Removal', ja: 'まつエクオフ' }, price: '80.000đ', priceUSD: '$3', time: '20 phút', desc: { vi: 'Tháo mi an toàn, không hại mi thật', en: 'Safe removal, no damage to natural lashes', ja: '安全なオフ、自まつ毛を傷めない' } },
        ],
        extensions: [
            { name: { vi: 'Đắp bột acrylic', en: 'Acrylic Extensions', ja: 'アクリルエクステ' }, price: '400.000đ', priceUSD: '$16', time: '120 phút', desc: { vi: 'Đắp bột full set, chọn hình dáng', en: 'Full set acrylic, choose your shape', ja: 'フルセットアクリル' } },
            { name: { vi: 'Nối gel builder', en: 'Gel Builder Extensions', ja: 'ジェルビルダーエクステ' }, price: '500.000đ', priceUSD: '$20', time: '120 phút', desc: { vi: 'Nối gel mỏng nhẹ, tự nhiên', en: 'Thin, lightweight, natural look', ja: '薄くて軽い、自然な仕上がり' } },
            { name: { vi: 'Polygel extensions', en: 'Polygel Extensions', ja: 'ポリジェルエクステ' }, price: '550.000đ', priceUSD: '$22', time: '130 phút', desc: { vi: 'Công nghệ mới nhất, bền & đẹp', en: 'Latest technology, durable & beautiful', ja: '最新技術、耐久性＆美しさ' } },
            { name: { vi: 'Tips dán nhanh', en: 'Press-on Tips', ja: 'プレスオンチップ' }, price: '250.000đ', priceUSD: '$10', time: '30 phút', desc: { vi: 'Tips dán sẵn, nhanh gọn, thay đổi dễ', en: 'Pre-made tips, quick & easy change', ja: 'プリメイドチップ、簡単に変更' } },
        ],
        care: [
            { name: { vi: 'Dưỡng móng keratin', en: 'Keratin Nail Treatment', ja: 'ケラチンネイルケア' }, price: '200.000đ', priceUSD: '$8', time: '40 phút', desc: { vi: 'Phục hồi móng yếu, bong tróc', en: 'Restore weak, peeling nails', ja: '弱い爪の修復' } },
            { name: { vi: 'Massage tay thư giãn', en: 'Hand Relaxation Massage', ja: 'ハンドリラクゼーション' }, price: '150.000đ', priceUSD: '$6', time: '30 phút', desc: { vi: 'Massage tinh dầu, giảm stress', en: 'Essential oil massage, stress relief', ja: 'エッセンシャルオイルマッサージ' } },
            { name: { vi: 'Paraffin wax treatment', en: 'Paraffin Wax Treatment', ja: 'パラフィンワックス' }, price: '180.000đ', priceUSD: '$7', time: '35 phút', desc: { vi: 'Dưỡng da tay mềm mịn, trắng sáng', en: 'Soften & brighten skin', ja: '肌を柔らかく明るく' } },
        ],
    };

    // ==================== IMAGE MAP ====================
    const localImages = [
        // === TAY - OLD NAIL (0-36) ===
        'img/tay/nail_elegant_pink_1772637269566.png', 'img/tay/nail_glitter_gold_1772637287925.png', 'img/tay/nail_french_floral_1772637308627.png',
        'img/tay/nail_ombre_sunset_1772637353592.png', 'img/tay/nail_marble_white_1772637371842.png', 'img/tay/nail_geometric_nude_1772637393339.png',
        'img/tay/nail_red_classic_1772637413323.png', 'img/tay/nail_pastel_rainbow_1772637434990.png', 'img/tay/nail_butterfly_art_1772637465780.png',
        'img/tay/nail_chrome_silver_1772637481644.png', 'img/tay/nail_cherry_blossom_1772637495298.png', 'img/tay/nail_dark_emerald_1772637518178.png',
        'img/tay/nail_nude_minimal_1772637531949.png', 'img/tay/nail_lavender_dream_1772637550872.png', 'img/tay/nail_leopard_print_1772637575421.png',
        'img/tay/nail_galaxy_dark_1772637596153.png', 'img/tay/nail_candy_pink_1772637612732.png',
        'img/tay/nail_double_line_french.png', 'img/tay/nail_wavy_french.png', 'img/tay/nail_deep_french.png', 'img/tay/nail_double_outline_french.png',
        'img/tay/nail_french_red_deep.png', 'img/tay/nail_french_glitter.png', 'img/tay/nail_bow_ribbon.png', 'img/tay/nail_cat_eye_nude.png',
        'img/tay/nail_heart_valentine.png', 'img/tay/nail_syrup_pink.png', 'img/tay/nail_aurora_borealis.png', 'img/tay/nail_starry_holographic.png',
        'img/tay/nail_bridal_pearl.png', 'img/tay/nail_sakura_art.png', 'img/tay/nail_magnet_cat_eye.png', 'img/tay/nail_velvet_red.png',
        'img/tay/nail_glass_korean.png', 'img/tay/nail_ocean_wave.png', 'img/tay/nail_neon_party.png', 'img/tay/nail_vintage_lace.png',
        // === TAY (37-86) ===
        'img/tay/hand_3d_flower_pink.png', 'img/tay/hand_3d_flower_white.png', 'img/tay/hand_abstract_art.png',
        'img/tay/hand_almond_blush.png', 'img/tay/hand_aurora_ice.png', 'img/tay/hand_bow_3d.png',
        'img/tay/hand_butterfly_3d.png', 'img/tay/hand_candy_pop.png', 'img/tay/hand_cat_eye_green.png',
        'img/tay/hand_cat_eye_purple.png', 'img/tay/hand_cat_eye_red.png', 'img/tay/hand_chrome_gold.png',
        'img/tay/hand_chrome_rose.png', 'img/tay/hand_coffin_nude.png', 'img/tay/hand_cow_print.png',
        'img/tay/hand_floral_vintage.png', 'img/tay/hand_foil_gold.png', 'img/tay/hand_french_classic.png',
        'img/tay/hand_french_v_shape.png', 'img/tay/hand_gem_luxury.png', 'img/tay/hand_glitter_holo.png',
        'img/tay/hand_glitter_silver.png', 'img/tay/hand_gold_leaf_ombre.png', 'img/tay/hand_gradient_blue.png',
        'img/tay/hand_heart_charm.png', 'img/tay/hand_jelly_clear.png', 'img/tay/hand_korean_blush.png',
        'img/tay/hand_lavender_field.png', 'img/tay/hand_leopard_brown.png', 'img/tay/hand_marble_black.png',
        'img/tay/hand_marble_pink.png', 'img/tay/hand_matte_black.png', 'img/tay/hand_mirror_silver.png',
        'img/tay/hand_neon_green.png', 'img/tay/hand_nude_natural.png', 'img/tay/hand_ocean_shell.png',
        'img/tay/hand_ombre_pink_white.png', 'img/tay/hand_ombre_red_black.png', 'img/tay/hand_pearl_elegant.png',
        'img/tay/hand_press_on_pink.png', 'img/tay/hand_sakura_spring.png', 'img/tay/hand_smoke_nail.png',
        'img/tay/hand_star_moon.png', 'img/tay/hand_stiletto_red.png', 'img/tay/hand_stone_texture.png',
        'img/tay/hand_sunflower.png', 'img/tay/hand_swirl_pastel.png', 'img/tay/hand_tribal_boho.png',
        'img/tay/hand_velvet_burgundy.png', 'img/tay/hand_watercolor.png',
        // === CHAN (87-116) ===
        'img/chan/foot_3d_flower_pink.png', 'img/chan/foot_3d_flower_white.png', 'img/chan/foot_aurora_shimmer.png',
        'img/chan/foot_bow_charm.png', 'img/chan/foot_butterfly_art.png', 'img/chan/foot_cat_eye_dark.png',
        'img/chan/foot_chrome_rose.png', 'img/chan/foot_coral_summer.png', 'img/chan/foot_floral_daisy.png',
        'img/chan/foot_foil_silver.png', 'img/chan/foot_french_classic.png', 'img/chan/foot_galaxy_dark.png',
        'img/chan/foot_glitter_gold.png', 'img/chan/foot_gradient_mint.png', 'img/chan/foot_heart_cute.png',
        'img/chan/foot_korean_jelly.png', 'img/chan/foot_lavender_soft.png', 'img/chan/foot_leopard_print.png',
        'img/chan/foot_marble_white.png', 'img/chan/foot_ocean_blue.png', 'img/chan/foot_ombre_pink.png',
        'img/chan/foot_pearl_luxury.png', 'img/chan/foot_pink_pastel.png', 'img/chan/foot_red_classic.png',
        'img/chan/foot_rose_garden.png', 'img/chan/foot_sakura_petal.png', 'img/chan/foot_smoke_effect.png',
        'img/chan/foot_tropical_palm.png', 'img/chan/foot_velvet_red.png', 'img/chan/foot_watercolor_art.png',
        // === MI (117-136) ===
        'img/mi/mi_bottom_lash.png', 'img/mi/mi_bridal.png', 'img/mi/mi_cat_eye.png',
        'img/mi/mi_colored_brown.png', 'img/mi/mi_colored_purple.png', 'img/mi/mi_doll_eye.png',
        'img/mi/mi_feather.png', 'img/mi/mi_fox_eye.png', 'img/mi/mi_hybrid.png',
        'img/mi/mi_kim_cuong.png', 'img/mi/mi_manga_eye.png', 'img/mi/mi_natural_classic.png',
        'img/mi/mi_natural_light.png', 'img/mi/mi_natural_wispy.png', 'img/mi/mi_open_eye.png',
        'img/mi/mi_spike.png', 'img/mi/mi_volume_2d.png', 'img/mi/mi_volume_3d.png',
        'img/mi/mi_volume_5d.png', 'img/mi/mi_wet_look.png',
    ];

    // Map designs → images - each design gets a unique image
    const allDesignImages = {};
    // Old nail designs 1-100 → use only OLD tay images (indices 0-36), each category unique
    for (let i = 1; i <= 100; i++) { allDesignImages[i] = localImages[(i - 1) % 37]; }
    // New designs 101+ map directly to their image index
    for (let i = 37; i < localImages.length; i++) { allDesignImages[100 + (i - 36)] = localImages[i]; }

    // ==================== GALLERY DATA ====================
    const galleryDesigns = [
        // === NAIL TAY / HAND (101-150) — SẢN PHẨM CHÍNH ===
        { id: 181, name: { vi: 'Mi Bottom Lash Tự Nhiên', en: 'Natural Bottom Lash', ja: 'ナチュラルボトムラッシュ' }, filter: 'mi', tag: 'NEW' },
        { id: 182, name: { vi: 'Mi Cô Dâu Sang Trọng', en: 'Bridal Elegant Lashes', ja: 'ブライダルエレガントラッシュ' }, filter: 'mi', tag: 'VIP' },
        { id: 183, name: { vi: 'Mi Cat Eye Quyến Rũ', en: 'Seductive Cat Eye Lashes', ja: 'キャットアイまつエク' }, filter: 'mi', tag: 'HOT' },
        { id: 184, name: { vi: 'Mi Nâu Tự Nhiên', en: 'Natural Brown Lashes', ja: 'ナチュラルブラウンラッシュ' }, filter: 'mi', tag: '' },
        { id: 185, name: { vi: 'Mi Tím Thời Trang', en: 'Fashion Purple Lashes', ja: 'ファッションパープルラッシュ' }, filter: 'mi', tag: 'NEW' },
        { id: 186, name: { vi: 'Mi Doll Eye Tròn To', en: 'Doll Eye Round Lashes', ja: 'ドールアイラッシュ' }, filter: 'mi', tag: 'HOT' },
        { id: 187, name: { vi: 'Mi Feather Lông Vũ', en: 'Feather Style Lashes', ja: 'フェザースタイルラッシュ' }, filter: 'mi', tag: '' },
        { id: 188, name: { vi: 'Mi Fox Eye Trendy', en: 'Trendy Fox Eye Lashes', ja: 'フォックスアイラッシュ' }, filter: 'mi', tag: 'HOT' },
        { id: 189, name: { vi: 'Mi Hybrid Đa Phong Cách', en: 'Hybrid Mix Lashes', ja: 'ハイブリッドラッシュ' }, filter: 'mi', tag: '' },
        { id: 190, name: { vi: 'Mi Kim Cương Lấp Lánh', en: 'Diamond Crystal Lashes', ja: 'ダイヤモンドラッシュ' }, filter: 'mi', tag: 'VIP' },
        { id: 191, name: { vi: 'Mi Manga Nhật Bản', en: 'Japanese Manga Lashes', ja: 'マンガスタイルラッシュ' }, filter: 'mi', tag: 'NEW' },
        { id: 192, name: { vi: 'Mi Classic Tự Nhiên', en: 'Classic Natural Lashes', ja: 'クラシックナチュラルラッシュ' }, filter: 'mi', tag: 'HOT' },
        { id: 193, name: { vi: 'Mi Siêu Nhẹ Tự Nhiên', en: 'Ultra-Light Natural Lashes', ja: 'ウルトラライトラッシュ' }, filter: 'mi', tag: '' },
        { id: 194, name: { vi: 'Mi Wispy Nhẹ Nhàng', en: 'Wispy Natural Lashes', ja: 'ウィスピーラッシュ' }, filter: 'mi', tag: '' },
        { id: 195, name: { vi: 'Mi Open Eye To Tròn', en: 'Open Eye Wide Lashes', ja: 'オープンアイラッシュ' }, filter: 'mi', tag: '' },
        { id: 196, name: { vi: 'Mi Spike Trendy', en: 'Spike Trendy Lashes', ja: 'スパイクラッシュ' }, filter: 'mi', tag: 'NEW' },
        { id: 197, name: { vi: 'Mi Volume 2D Nhẹ', en: 'Light Volume 2D Lashes', ja: 'ボリューム2Dラッシュ' }, filter: 'mi', tag: '' },
        { id: 198, name: { vi: 'Mi Volume 3D Dày', en: 'Thick Volume 3D Lashes', ja: 'ボリューム3Dラッシュ' }, filter: 'mi', tag: 'HOT' },
        { id: 199, name: { vi: 'Mi Mega Volume 5D', en: 'Mega Volume 5D Lashes', ja: 'メガボリューム5Dラッシュ' }, filter: 'mi', tag: 'VIP' },
        { id: 200, name: { vi: 'Mi Wet Look Bóng Mượt', en: 'Wet Look Glossy Lashes', ja: 'ウェットルックラッシュ' }, filter: 'mi', tag: '' },
        // === NAIL CHÂN / PEDICURE (151-180) ===
        { id: 151, name: { vi: 'Chân Hoa 3D Hồng', en: 'Pedi 3D Pink Flower', ja: 'ペディ3Dピンクフラワー' }, filter: 'chan', tag: 'NEW' },
        { id: 152, name: { vi: 'Chân Hoa 3D Trắng', en: 'Pedi 3D White Flower', ja: 'ペディ3Dホワイトフラワー' }, filter: 'chan', tag: 'HOT' },
        { id: 153, name: { vi: 'Chân Aurora Shimmer', en: 'Pedi Aurora Shimmer', ja: 'ペディオーロラシマー' }, filter: 'chan', tag: '' },
        { id: 154, name: { vi: 'Chân Nơ Charm Cute', en: 'Pedi Bow Charm Cute', ja: 'ペディボウチャーム' }, filter: 'chan', tag: '' },
        { id: 155, name: { vi: 'Chân Bướm Nghệ Thuật', en: 'Pedi Butterfly Art', ja: 'ペディバタフライアート' }, filter: 'chan', tag: 'NEW' },
        { id: 156, name: { vi: 'Chân Cat Eye Tối', en: 'Pedi Dark Cat Eye', ja: 'ペディダークキャットアイ' }, filter: 'chan', tag: '' },
        { id: 157, name: { vi: 'Chân Chrome Rose Gold', en: 'Pedi Chrome Rose Gold', ja: 'ペディクロームローズ' }, filter: 'chan', tag: 'HOT' },
        { id: 158, name: { vi: 'Chân Coral Mùa Hè', en: 'Pedi Coral Summer', ja: 'ペディコーラルサマー' }, filter: 'chan', tag: '' },
        { id: 159, name: { vi: 'Chân Hoa Cúc Daisy', en: 'Pedi Floral Daisy', ja: 'ペディデイジーフラワー' }, filter: 'chan', tag: '' },
        { id: 160, name: { vi: 'Chân Foil Bạc', en: 'Pedi Silver Foil', ja: 'ペディシルバーフォイル' }, filter: 'chan', tag: 'NEW' },
        { id: 161, name: { vi: 'Chân French Classic', en: 'Pedi French Classic', ja: 'ペディフレンチクラシック' }, filter: 'chan', tag: '' },
        { id: 162, name: { vi: 'Chân Galaxy Tối', en: 'Pedi Dark Galaxy', ja: 'ペディダークギャラクシー' }, filter: 'chan', tag: '' },
        { id: 163, name: { vi: 'Chân Glitter Vàng', en: 'Pedi Gold Glitter', ja: 'ペディゴールドグリッター' }, filter: 'chan', tag: 'HOT' },
        { id: 164, name: { vi: 'Chân Gradient Mint', en: 'Pedi Gradient Mint', ja: 'ペディグラデーションミント' }, filter: 'chan', tag: '' },
        { id: 165, name: { vi: 'Chân Heart Cute', en: 'Pedi Cute Heart', ja: 'ペディキュートハート' }, filter: 'chan', tag: '' },
        { id: 166, name: { vi: 'Chân Korean Jelly', en: 'Pedi Korean Jelly', ja: 'ペディコリアンジェリー' }, filter: 'chan', tag: 'NEW' },
        { id: 167, name: { vi: 'Chân Lavender Nhẹ', en: 'Pedi Soft Lavender', ja: 'ペディソフトラベンダー' }, filter: 'chan', tag: '' },
        { id: 168, name: { vi: 'Chân Da Báo', en: 'Pedi Leopard Print', ja: 'ペディレオパード' }, filter: 'chan', tag: '' },
        { id: 169, name: { vi: 'Chân Marble Trắng', en: 'Pedi White Marble', ja: 'ペディホワイトマーブル' }, filter: 'chan', tag: '' },
        { id: 170, name: { vi: 'Chân Ocean Xanh', en: 'Pedi Ocean Blue', ja: 'ペディオーシャンブルー' }, filter: 'chan', tag: 'HOT' },
        { id: 171, name: { vi: 'Chân Ombre Hồng', en: 'Pedi Pink Ombre', ja: 'ペディピンクオンブレ' }, filter: 'chan', tag: '' },
        { id: 172, name: { vi: 'Chân Pearl Luxury', en: 'Pedi Pearl Luxury', ja: 'ペディパールラグジュアリー' }, filter: 'chan', tag: 'VIP' },
        { id: 173, name: { vi: 'Chân Hồng Pastel', en: 'Pedi Pastel Pink', ja: 'ペディパステルピンク' }, filter: 'chan', tag: '' },
        { id: 174, name: { vi: 'Chân Đỏ Classic', en: 'Pedi Classic Red', ja: 'ペディクラシックレッド' }, filter: 'chan', tag: '' },
        { id: 175, name: { vi: 'Chân Rose Garden', en: 'Pedi Rose Garden', ja: 'ペディローズガーデン' }, filter: 'chan', tag: '' },
        { id: 176, name: { vi: 'Chân Sakura Cánh Hoa', en: 'Pedi Sakura Petal', ja: 'ペディ桜ペタル' }, filter: 'chan', tag: 'NEW' },
        { id: 177, name: { vi: 'Chân Smoke Effect', en: 'Pedi Smoke Effect', ja: 'ペディスモークエフェクト' }, filter: 'chan', tag: '' },
        { id: 178, name: { vi: 'Chân Tropical Palm', en: 'Pedi Tropical Palm', ja: 'ペディトロピカルパーム' }, filter: 'chan', tag: '' },
        { id: 179, name: { vi: 'Chân Velvet Đỏ', en: 'Pedi Velvet Red', ja: 'ペディベルベットレッド' }, filter: 'chan', tag: '' },
        { id: 180, name: { vi: 'Chân Watercolor Art', en: 'Pedi Watercolor Art', ja: 'ペディウォーターカラー' }, filter: 'chan', tag: '' },
        // === MI / EYELASH (181-200) — DỊCH VỤ PHỤ ===
        { id: 101, name: { vi: '3D Hoa Hồng Shimmer', en: '3D Pink Flower Shimmer', ja: '3Dピンクフラワーシマー' }, filter: 'tay', tag: 'HOT' },
        { id: 102, name: { vi: '3D Hoa Trắng Tinh Khôi', en: '3D White Flower Pure', ja: '3Dホワイトフラワーピュア' }, filter: 'tay', tag: 'NEW' },
        { id: 103, name: { vi: 'Abstract Art Trendy', en: 'Abstract Art Trendy', ja: 'アブストラクトアートトレンド' }, filter: 'tay', tag: '' },
        { id: 104, name: { vi: 'Almond Blush Pink', en: 'Almond Blush Pink', ja: 'アーモンドブラッシュ' }, filter: 'tay', tag: '' },
        { id: 105, name: { vi: 'Aurora Ice Băng Đá', en: 'Aurora Ice Nails', ja: 'オーロラアイスネイル' }, filter: 'tay', tag: 'NEW' },
        { id: 106, name: { vi: 'Nơ 3D Dễ Thương', en: '3D Bow Cute', ja: '3Dリボンキュート' }, filter: 'tay', tag: 'HOT' },
        { id: 107, name: { vi: 'Bướm 3D Lấp Lánh', en: '3D Butterfly Glitter', ja: '3Dバタフライグリッター' }, filter: 'tay', tag: '' },
        { id: 108, name: { vi: 'Candy Pop Sặc Sỡ', en: 'Candy Pop Colorful', ja: 'キャンディポップ' }, filter: 'tay', tag: '' },
        { id: 109, name: { vi: 'Cat Eye Xanh Lá', en: 'Green Cat Eye', ja: 'グリーンキャットアイ' }, filter: 'tay', tag: 'HOT' },
        { id: 110, name: { vi: 'Cat Eye Tím Huyền Bí', en: 'Purple Cat Eye', ja: 'パープルキャットアイ' }, filter: 'tay', tag: '' },
        { id: 111, name: { vi: 'Cat Eye Đỏ Rượu', en: 'Wine Red Cat Eye', ja: 'ワインレッドキャットアイ' }, filter: 'tay', tag: '' },
        { id: 112, name: { vi: 'Chrome Vàng Mirror', en: 'Gold Mirror Chrome', ja: 'ゴールドミラークローム' }, filter: 'tay', tag: 'HOT' },
        { id: 113, name: { vi: 'Chrome Rose Gold', en: 'Rose Gold Chrome', ja: 'ローズゴールドクローム' }, filter: 'tay', tag: '' },
        { id: 114, name: { vi: 'Coffin Nude Elegance', en: 'Coffin Nude Elegance', ja: 'コフィンヌードエレガンス' }, filter: 'tay', tag: '' },
        { id: 115, name: { vi: 'Cow Print Trendy', en: 'Trendy Cow Print', ja: 'カウプリントトレンド' }, filter: 'tay', tag: 'NEW' },
        { id: 116, name: { vi: 'Hoa Vintage Cổ Điển', en: 'Vintage Floral Classic', ja: 'ヴィンテージフローラル' }, filter: 'tay', tag: '' },
        { id: 117, name: { vi: 'Foil Vàng Ánh Kim', en: 'Gold Foil Metallic', ja: 'ゴールドフォイルメタリック' }, filter: 'tay', tag: '' },
        { id: 118, name: { vi: 'French Classic Trắng', en: 'Classic White French', ja: 'クラシックフレンチ' }, filter: 'tay', tag: '' },
        { id: 119, name: { vi: 'French V-Shape', en: 'V-Shape French', ja: 'Vシェイプフレンチ' }, filter: 'tay', tag: 'NEW' },
        { id: 120, name: { vi: 'Đính Đá Luxury VIP', en: 'Gem Luxury VIP', ja: 'ジェムラグジュアリーVIP' }, filter: 'tay', tag: 'VIP' },
        { id: 121, name: { vi: 'Glitter Holographic', en: 'Holographic Glitter', ja: 'ホログラフィックグリッター' }, filter: 'tay', tag: '' },
        { id: 122, name: { vi: 'Glitter Bạc Lấp Lánh', en: 'Silver Glitter Sparkle', ja: 'シルバーグリッタースパークル' }, filter: 'tay', tag: '' },
        { id: 123, name: { vi: 'Gold Leaf Ombre Sang', en: 'Gold Leaf Ombre Luxe', ja: 'ゴールドリーフオンブレ' }, filter: 'tay', tag: 'HOT' },
        { id: 124, name: { vi: 'Gradient Xanh Dương', en: 'Blue Gradient Ombre', ja: 'ブルーグラデーション' }, filter: 'tay', tag: '' },
        { id: 125, name: { vi: 'Heart Charm Valentine', en: 'Valentine Heart Charm', ja: 'バレンタインハートチャーム' }, filter: 'tay', tag: '' },
        { id: 126, name: { vi: 'Jelly Trong Suốt', en: 'Clear Jelly Nails', ja: 'クリアジェリーネイル' }, filter: 'tay', tag: 'NEW' },
        { id: 127, name: { vi: 'Korean Blush Nails', en: 'Korean Blush Nails', ja: 'コリアンブラッシュネイル' }, filter: 'tay', tag: 'HOT' },
        { id: 128, name: { vi: 'Lavender Field Mộng Mơ', en: 'Dreamy Lavender Field', ja: 'ドリーミーラベンダーフィールド' }, filter: 'tay', tag: '' },
        { id: 129, name: { vi: 'Da Báo Nâu Wild', en: 'Wild Brown Leopard', ja: 'ワイルドブラウンレオパード' }, filter: 'tay', tag: '' },
        { id: 130, name: { vi: 'Marble Đen Sang Trọng', en: 'Black Marble Luxe', ja: 'ブラックマーブルラグジュアリー' }, filter: 'tay', tag: '' },
        { id: 131, name: { vi: 'Marble Hồng Nhẹ', en: 'Soft Pink Marble', ja: 'ソフトピンクマーブル' }, filter: 'tay', tag: '' },
        { id: 132, name: { vi: 'Matte Đen Cá Tính', en: 'Matte Black Bold', ja: 'マットブラックボールド' }, filter: 'tay', tag: 'HOT' },
        { id: 133, name: { vi: 'Mirror Bạc Gương', en: 'Silver Mirror Chrome', ja: 'シルバーミラークローム' }, filter: 'tay', tag: '' },
        { id: 134, name: { vi: 'Neon Xanh Lá Bright', en: 'Bright Neon Green', ja: 'ブライトネオングリーン' }, filter: 'tay', tag: 'NEW' },
        { id: 135, name: { vi: 'Nude Tự Nhiên Sạch', en: 'Clean Natural Nude', ja: 'クリーンナチュラルヌード' }, filter: 'tay', tag: '' },
        { id: 136, name: { vi: 'Vỏ Sò Biển Ocean', en: 'Ocean Shell Nails', ja: 'オーシャンシェルネイル' }, filter: 'tay', tag: '' },
        { id: 137, name: { vi: 'Ombre Hồng Trắng', en: 'Pink White Ombre', ja: 'ピンクホワイトオンブレ' }, filter: 'tay', tag: '' },
        { id: 138, name: { vi: 'Ombre Đỏ Đen Bold', en: 'Red Black Ombre Bold', ja: 'レッドブラックオンブレ' }, filter: 'tay', tag: '' },
        { id: 139, name: { vi: 'Pearl Ngọc Trai Elegant', en: 'Elegant Pearl Nails', ja: 'エレガントパールネイル' }, filter: 'tay', tag: 'VIP' },
        { id: 140, name: { vi: 'Press-on Hồng Ombre', en: 'Pink Ombre Press-On', ja: 'ピンクオンブレプレスオン' }, filter: 'tay', tag: '' },
        { id: 141, name: { vi: 'Sakura Mùa Xuân', en: 'Spring Sakura Nails', ja: 'スプリング桜ネイル' }, filter: 'tay', tag: '' },
        { id: 142, name: { vi: 'Smoke Nail Art', en: 'Smoke Nail Art', ja: 'スモークネイルアート' }, filter: 'tay', tag: '' },
        { id: 143, name: { vi: 'Sao Trăng Galaxy', en: 'Star Moon Galaxy', ja: 'スタームーンギャラクシー' }, filter: 'tay', tag: '' },
        { id: 144, name: { vi: 'Stiletto Đỏ Đính Đá', en: 'Red Stiletto Crystal', ja: 'レッドスティレットクリスタル' }, filter: 'tay', tag: 'HOT' },
        { id: 145, name: { vi: 'Stone Texture Đá', en: 'Stone Texture Nails', ja: 'ストーンテクスチャー' }, filter: 'tay', tag: '' },
        { id: 146, name: { vi: 'Hoa Hướng Dương', en: 'Sunflower Nails', ja: 'ヒマワリネイル' }, filter: 'tay', tag: '' },
        { id: 147, name: { vi: 'Swirl Pastel Trendy', en: 'Pastel Swirl Trendy', ja: 'パステルスワールトレンド' }, filter: 'tay', tag: '' },
        { id: 148, name: { vi: 'Tribal Boho Pattern', en: 'Tribal Boho Pattern', ja: 'トライバルボーホー' }, filter: 'tay', tag: '' },
        { id: 149, name: { vi: 'Velvet Đỏ Burgundy', en: 'Velvet Burgundy Red', ja: 'ベルベットバーガンディ' }, filter: 'tay', tag: '' },
        { id: 150, name: { vi: 'Watercolor Nhẹ Nhàng', en: 'Soft Watercolor Nails', ja: 'ソフトウォーターカラー' }, filter: 'tay', tag: '' },
        // === MẪU CŨ (1-37) — mỗi mẫu 1 ảnh riêng ===
        { id: 1, name: { vi: 'Ombre Hồng Pastel', en: 'Pastel Pink Ombre', ja: 'パステルピンクオンブレ' }, filter: 'trendy', tag: 'HOT' },
        { id: 2, name: { vi: 'Marble Trắng Vàng', en: 'White Gold Marble', ja: 'ホワイトゴールドマーブル' }, filter: 'elegant', tag: 'NEW' },
        { id: 3, name: { vi: 'Caro Nâu Sữa', en: 'Milk Brown Check', ja: 'ミルクブラウンチェック' }, filter: 'trendy', tag: 'HOT' },
        { id: 4, name: { vi: 'French Tip Hoa Nhí', en: 'Floral French Tip', ja: 'フレンチチップフラワー' }, filter: 'french', tag: '' },
        { id: 5, name: { vi: 'Hồng Candy Dễ Thương', en: 'Candy Pink Cute', ja: 'キャンディピンクキュート' }, filter: 'cute', tag: '' },
        { id: 6, name: { vi: 'Chrome Bạc Gương', en: 'Silver Mirror Chrome', ja: 'シルバーミラークローム' }, filter: 'bold', tag: 'HOT' },
        { id: 7, name: { vi: 'Hoa Nhí Minimalist', en: 'Mini Flower Minimal', ja: 'ミニフラワーミニマル' }, filter: 'minimalist', tag: '' },
        { id: 8, name: { vi: 'Galaxy Tím Xanh', en: 'Purple Blue Galaxy', ja: 'パープルブルーギャラクシー' }, filter: 'bold', tag: '' },
        { id: 9, name: { vi: 'Da Báo Trendy', en: 'Trendy Leopard', ja: 'トレンドレオパード' }, filter: 'trendy', tag: 'HOT' },
        { id: 10, name: { vi: 'Candy Pastel Cute', en: 'Pastel Candy Cute', ja: 'パステルキャンディキュート' }, filter: 'cute', tag: 'NEW' },
        { id: 11, name: { vi: 'Galaxy Sapphire', en: 'Sapphire Galaxy', ja: 'サファイアギャラクシー' }, filter: 'elegant', tag: '' },
        { id: 12, name: { vi: 'Nude Tối Giản', en: 'Minimal Nude', ja: 'ミニマルヌード' }, filter: 'minimalist', tag: '' },
        { id: 13, name: { vi: 'Hoa Anh Đào Sakura', en: 'Cherry Blossom Sakura', ja: '桜チェリーブロッサム' }, filter: 'cute', tag: 'HOT' },
        { id: 14, name: { vi: 'Leopard Da Báo', en: 'Leopard Print', ja: 'レオパードプリント' }, filter: 'bold', tag: '' },
        { id: 15, name: { vi: 'Ombre Sunset Cam', en: 'Sunset Orange Ombre', ja: 'サンセットオンブレ' }, filter: 'trendy', tag: '' },
        { id: 16, name: { vi: 'Hồng Pastel Nhẹ Nhàng', en: 'Soft Pastel Pink', ja: 'ソフトパステルピンク' }, filter: 'cute', tag: '' },
        { id: 17, name: { vi: 'Vàng Gold Glitter', en: 'Gold Glitter Luxury', ja: 'ゴールドグリッターラグジュアリー' }, filter: 'elegant', tag: 'VIP' },
        { id: 18, name: { vi: 'Geometric Nude', en: 'Geometric Nude Art', ja: 'ジオメトリックヌード' }, filter: 'minimalist', tag: '' },
        { id: 19, name: { vi: 'Pastel Rainbow', en: 'Pastel Rainbow', ja: 'パステルレインボー' }, filter: 'bold', tag: 'NEW' },
        { id: 20, name: { vi: 'Xanh Emerald Sang', en: 'Emerald Luxe', ja: 'エメラルドラグジュアリー' }, filter: 'trendy', tag: 'HOT' },
        { id: 21, name: { vi: 'Marble Ngọc Trai', en: 'Pearl Marble', ja: 'パールマーブル' }, filter: 'elegant', tag: '' },
        { id: 22, name: { vi: 'Đỏ Classic Sang Trọng', en: 'Classic Red Elegant', ja: 'クラシックレッドエレガント' }, filter: 'elegant', tag: '' },
        { id: 23, name: { vi: 'Cầu Vồng Pastel', en: 'Pastel Rainbow', ja: 'パステルレインボー' }, filter: 'cute', tag: '' },
        { id: 24, name: { vi: 'Lavender Dreamy', en: 'Dreamy Lavender', ja: 'ドリーミーラベンダー' }, filter: 'cute', tag: 'NEW' },
        { id: 25, name: { vi: 'Galaxy Đen Cá Tính', en: 'Dark Galaxy Bold', ja: 'ダークギャラクシーボールド' }, filter: 'bold', tag: '' },
        { id: 26, name: { vi: 'Gold Glitter Phối', en: 'Gold Glitter Mix', ja: 'ゴールドグリッターミックス' }, filter: 'trendy', tag: 'HOT' },
        { id: 27, name: { vi: 'Xanh Rêu Emerald', en: 'Moss Emerald', ja: 'モスエメラルド' }, filter: 'bold', tag: '' },
        { id: 28, name: { vi: 'Nude Gold Line', en: 'Nude Gold Line', ja: 'ヌードゴールドライン' }, filter: 'minimalist', tag: '' },
        { id: 29, name: { vi: 'Marble Hồng Nhẹ', en: 'Soft Pink Marble', ja: 'ソフトピンクマーブル' }, filter: 'elegant', tag: '' },
        { id: 30, name: { vi: 'Bướm 3D Tím', en: 'Purple 3D Butterfly', ja: 'パープル3Dバタフライ' }, filter: 'cute', tag: 'HOT' },
        { id: 31, name: { vi: 'Chrome Metallic', en: 'Chrome Metallic', ja: 'クロームメタリック' }, filter: 'minimalist', tag: '' },
        { id: 32, name: { vi: 'Sunset Mùa Hè', en: 'Summer Sunset', ja: 'サマーサンセット' }, filter: 'cute', tag: '' },
        { id: 33, name: { vi: 'Galaxy Deep Blue', en: 'Deep Blue Galaxy', ja: 'ディープブルーギャラクシー' }, filter: 'bold', tag: '' },
        { id: 34, name: { vi: 'Glitter Amber Vàng', en: 'Amber Gold Glitter', ja: 'アンバーゴールドグリッター' }, filter: 'trendy', tag: 'NEW' },
        { id: 35, name: { vi: 'Línea Geometric', en: 'Geometric Lines', ja: 'ジオメトリックライン' }, filter: 'minimalist', tag: '' },
        { id: 36, name: { vi: 'Cherry Đỏ Tươi', en: 'Fresh Cherry Red', ja: 'フレッシュチェリーレッド' }, filter: 'trendy', tag: '' },
        { id: 37, name: { vi: 'Nude Sạch Sẽ', en: 'Clean Nude', ja: 'クリーンヌード' }, filter: 'cute', tag: '' },
    ];

    // ==================== STATE ====================
    let currentLang = localStorage.getItem('voiu_lang') || 'vi';
    let galleryShowCount = 12;

    // ==================== INIT ====================
    document.addEventListener('DOMContentLoaded', () => {
        initHeader();
        initHamburger();
        initLangSwitcher();
        initHeroParticles();
        initCountUp();
        initMenu();
        initGallery();
        initBookingForm();
        initScrollAnimations();
        initSmoothScroll();
        loadBookings();
        initVisitCounter();
        applyLanguage(currentLang);
        setMinDate();
    });

    // ==================== HEADER SCROLL ====================
    function initHeader() {
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
            const sections = ['home', 'menu', 'gallery', 'booking', 'contact'];
            let current = '';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) current = id;
            }
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });
        });
    }

    // ==================== HAMBURGER ====================
    function initHamburger() {
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('mainNav');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    // ==================== LANGUAGE SWITCHER ====================
    function initLangSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === currentLang) btn.classList.add('active');
            btn.addEventListener('click', () => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentLang = btn.dataset.lang;
                localStorage.setItem('voiu_lang', currentLang);
                applyLanguage(currentLang);
            });
        });
    }

    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        renderMenu(document.querySelector('.menu-tab.active')?.dataset.category || 'manicure');
        renderGallery();
        loadBookings();
    }

    // ==================== HERO PARTICLES ====================
    function initHeroParticles() {
        const container = document.getElementById('heroParticles');
        const sparkles = ['✨', '💅', '⭐', '🌸', '💫'];
        for (let i = 0; i < 15; i++) {
            const p = document.createElement('span');
            p.className = 'hero-particle';
            p.textContent = sparkles[i % sparkles.length];
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.fontSize = (12 + Math.random() * 16) + 'px';
            p.style.animationDelay = (Math.random() * 6) + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            container.appendChild(p);
        }
    }

    // ==================== COUNT UP ANIMATION ====================
    function initCountUp() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const nums = entry.target.querySelectorAll('.stat-number');
                    nums.forEach(n => {
                        const target = parseInt(n.dataset.count);
                        let current = 0;
                        const step = Math.ceil(target / 40);
                        const timer = setInterval(() => {
                            current += step;
                            if (current >= target) { current = target; clearInterval(timer); }
                            n.textContent = current;
                        }, 40);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        const stats = document.querySelector('.hero-stats');
        if (stats) observer.observe(stats);
    }

    // ==================== MENU ====================
    function initMenu() {
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderMenu(tab.dataset.category);
            });
        });
        renderMenu('manicure');
        populateServiceSelect();
    }

    function renderMenu(category) {
        const grid = document.getElementById('menuGrid');
        const items = menuData[category] || [];
        grid.innerHTML = items.map(item => {
            const hasDetails = item.details && item.details.length > 0;
            const t = translations[currentLang];
            const detailsHTML = hasDetails ? `
                <div class="menu-item-details" style="display:none">
                    <div class="details-breakdown">
                        ${item.details.map(d => `<div class="detail-row"><span>${d.n}</span><span>${d.p}</span></div>`).join('')}
                        <div class="detail-row detail-total"><span>${t.price_total}</span><span class="original-price">${item.originalPrice}</span></div>
                        <div class="detail-row detail-discount"><span>${t.price_combo}</span><span class="combo-price">${item.price} <b>${item.discount}</b></span></div>
                    </div>
                </div>` : '';
            return `
            <div class="menu-item fade-in visible${hasDetails ? ' has-details' : ''}">
                <div class="menu-item-left">
                    <div class="menu-item-name">${item.name[currentLang] || item.name.vi}${hasDetails ? ` <span class="combo-badge">${t.combo_label}</span>` : ''}</div>
                    <div class="menu-item-desc">${item.desc[currentLang] || item.desc.vi}</div>
                    <span class="menu-item-duration">⏱ ${item.time}</span>
                    ${hasDetails ? `<button class="detail-toggle" data-show="${t.detail_show}" data-hide="${t.detail_hide}">${t.detail_show}</button>` : ''}
                </div>
                <div class="menu-item-price">
                    ${hasDetails ? `<span class="price-original">${item.originalPrice}</span>` : ''}
                    <span class="price-vnd">${item.price}</span>
                    <span class="price-usd">${item.priceUSD || ''}</span>
                    ${hasDetails ? `<span class="price-discount">${item.discount}</span>` : ''}
                </div>
                ${detailsHTML}
            </div>`;
        }).join('');
        // Toggle detail breakdown
        grid.querySelectorAll('.detail-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const details = btn.closest('.menu-item').querySelector('.menu-item-details');
                const isOpen = details.style.display !== 'none';
                details.style.display = isOpen ? 'none' : 'block';
                btn.textContent = isOpen ? btn.dataset.show : btn.dataset.hide;
            });
        });
    }

    function populateServiceSelect() {
        const select = document.getElementById('clientService');
        const phKey = 'form_service_ph';
        select.innerHTML = `<option value="">${translations[currentLang][phKey]}</option>`;
        Object.entries(menuData).forEach(([cat, items]) => {
            items.forEach(item => {
                const option = document.createElement('option');
                option.value = (item.name.vi || item.name.en);
                option.textContent = (item.name[currentLang] || item.name.vi) + ' - ' + item.price;
                select.appendChild(option);
            });
        });
    }

    // ==================== GALLERY ====================
    function initGallery() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                galleryShowCount = 12;
                renderGallery(btn.dataset.filter);
            });
        });
        document.getElementById('loadMoreBtn').addEventListener('click', () => {
            galleryShowCount += 12;
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            renderGallery(activeFilter);
        });
        renderGallery();
        initLightbox();
    }

    function getDesignImage(designId) {
        return allDesignImages[designId] || localImages[(designId - 1) % localImages.length];
    }

    function renderGallery(filter = 'all') {
        const grid = document.getElementById('galleryGrid');
        let filtered = filter === 'all' ? galleryDesigns : galleryDesigns.filter(d => d.filter === filter);
        // When showing 'all', prioritize: tay first → french/trendy/etc → chan → mi last
        if (filter === 'all') {
            const priority = { tay: 0, french: 1, trendy: 2, elegant: 3, cute: 4, minimalist: 5, bold: 6, chan: 7, mi: 8 };
            filtered = [...filtered].sort((a, b) => (priority[a.filter] ?? 3) - (priority[b.filter] ?? 3));
        }
        const showing = filtered.slice(0, galleryShowCount);
        const loadBtn = document.getElementById('loadMoreBtn');
        loadBtn.style.display = galleryShowCount >= filtered.length ? 'none' : 'block';

        grid.innerHTML = showing.map((d, i) => {
            const name = d.name[currentLang] || d.name.vi;
            const imgSrc = getDesignImage(d.id);
            const tagMap = { 'HOT': translations[currentLang].tag_hot, 'NEW': translations[currentLang].tag_new, 'VIP': translations[currentLang].tag_vip };
            const tagText = d.tag ? (tagMap[d.tag] || d.tag) : '';
            return `
                <div class="gallery-item fade-in visible" data-index="${i}" style="animation-delay:${i * 0.05}s">
                    <img src="${imgSrc}" alt="${name}" loading="lazy">
                    ${tagText ? `<span class="gallery-item-tag">${tagText}</span>` : ''}
                    <div class="gallery-item-overlay">
                        <span class="gallery-item-name">${name}</span>
                    </div>
                </div>
            `;
        }).join('');

        grid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index), showing));
        });
    }

    // ==================== LIGHTBOX ====================
    let lightboxItems = [];
    let lightboxIndex = 0;

    function initLightbox() {
        document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
        document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
        document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) closeLightbox();
        });
        // Swipe support for mobile
        let touchStartX = 0;
        const lb = document.getElementById('lightbox');
        lb.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        lb.addEventListener('touchend', (e) => {
            const diff = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? -1 : 1);
        }, { passive: true });
    }

    function openLightbox(index, items) {
        lightboxItems = items;
        lightboxIndex = index;
        updateLightbox();
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
    }

    function navigateLightbox(dir) {
        lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
        updateLightbox();
    }

    function updateLightbox() {
        const d = lightboxItems[lightboxIndex];
        if (!d) return;
        const name = d.name[currentLang] || d.name.vi;
        const caption = document.getElementById('lightboxCaption');
        caption.textContent = `${lightboxIndex + 1}/${lightboxItems.length} — ${name}`;
        const img = document.getElementById('lightboxImg');
        img.src = getDesignImage(d.id);
        img.alt = name;
        img.style.display = 'block';
        caption.style.fontSize = '14px';
    }

    // ==================== VISIT COUNTER ====================
    function initVisitCounter() {
        let visits = parseInt(localStorage.getItem('voiu_visits') || '0');
        visits++;
        localStorage.setItem('voiu_visits', visits.toString());
        const el = document.getElementById('visitCount');
        if (el) {
            // Animate count up
            let current = 0;
            const step = Math.max(1, Math.ceil(visits / 40));
            const timer = setInterval(() => {
                current += step;
                if (current >= visits) { current = visits; clearInterval(timer); }
                el.textContent = current;
            }, 40);
        }
    }

    // ==================== BOOKING ====================
    function initBookingForm() {
        const form = document.getElementById('bookingForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('clientName').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const service = document.getElementById('clientService').value;
            const date = document.getElementById('clientDate').value;
            const time = document.getElementById('clientTime').value;
            const note = document.getElementById('clientNote').value.trim();

            if (!name || !phone || !service || !date || !time) {
                showToast(translations[currentLang].toast_error);
                return;
            }

            const booking = { id: Date.now(), name, phone, service, date, time, note };
            const bookings = JSON.parse(localStorage.getItem('voiu_bookings') || '[]');
            bookings.unshift(booking);
            localStorage.setItem('voiu_bookings', JSON.stringify(bookings));

            form.reset();
            loadBookings();
            showModal();
            showToast(translations[currentLang].toast_booked);
        });

        document.getElementById('modalClose').addEventListener('click', closeModal);
        document.getElementById('successModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('successModal')) closeModal();
        });
    }

    function setMinDate() {
        const dateInput = document.getElementById('clientDate');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    function loadBookings() {
        const list = document.getElementById('historyList');
        const bookings = JSON.parse(localStorage.getItem('voiu_bookings') || '[]');
        if (bookings.length === 0) {
            list.innerHTML = `<p class="no-bookings">${translations[currentLang].no_bookings}</p>`;
            return;
        }
        list.innerHTML = bookings.map(b => `
            <div class="history-item">
                <span class="h-delete" onclick="window.deleteBooking(${b.id})" title="Xóa">&times;</span>
                <div class="h-name">${b.name}</div>
                <div class="h-service">${b.service}</div>
                <div class="h-datetime">📅 ${b.date} | ⏰ ${b.time}</div>
                ${b.note ? `<div class="h-note" style="font-size:12px;color:#7A6A5E;margin-top:4px">📝 ${b.note}</div>` : ''}
            </div>
        `).join('');
    }

    window.deleteBooking = function (id) {
        let bookings = JSON.parse(localStorage.getItem('voiu_bookings') || '[]');
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('voiu_bookings', JSON.stringify(bookings));
        loadBookings();
        showToast(translations[currentLang].toast_deleted);
    };

    // ==================== TOAST ====================
    function showToast(msg) {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // ==================== MODAL ====================
    function showModal() {
        document.getElementById('successModal').classList.add('open');
    }
    function closeModal() {
        document.getElementById('successModal').classList.remove('open');
    }

    // ==================== SCROLL ANIMATIONS ====================
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        document.querySelectorAll('.section-header, .menu-item, .gallery-item, .booking-form, .booking-history').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // ==================== SMOOTH SCROLL ====================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 60;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });
    }

})();
