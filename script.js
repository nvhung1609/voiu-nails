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
            cat_nailart: '🎨 Nail Art', cat_extensions: '✨ Extensions', cat_care: '🧴 Chăm sóc',
            gallery_tag: '🌟 Bộ sưu tập', gallery_title: 'Mẫu Nail Hot Trend',
            gallery_desc: 'Những mẫu nail đang thịnh hành nhất Việt Nam 2026',
            filter_all: 'Tất cả', filter_trendy: '🔥 Hot Trend', filter_elegant: '👑 Sang trọng',
            filter_cute: '🎀 Dễ thương', filter_minimalist: '✨ Tối giản', filter_bold: '💥 Cá tính',
            filter_french: '💅 French',
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
            cat_nailart: '🎨 Nail Art', cat_extensions: '✨ Extensions', cat_care: '🧴 Care',
            gallery_tag: '🌟 Collection', gallery_title: 'Trending Nail Designs',
            gallery_desc: 'The hottest nail trends in Vietnam 2026',
            filter_all: 'All', filter_trendy: '🔥 Trending', filter_elegant: '👑 Elegant',
            filter_cute: '🎀 Cute', filter_minimalist: '✨ Minimal', filter_bold: '💥 Bold',
            filter_french: '💅 French',
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
            cat_nailart: '🎨 ネイルアート', cat_extensions: '✨ エクステ', cat_care: '🧴 ケア',
            gallery_tag: '🌟 コレクション', gallery_title: 'トレンドネイルデザイン',
            gallery_desc: '2026年ベトナムで最も人気のネイルトレンド',
            filter_all: 'すべて', filter_trendy: '🔥 トレンド', filter_elegant: '👑 エレガント',
            filter_cute: '🎀 キュート', filter_minimalist: '✨ ミニマル', filter_bold: '💥 ボールド',
            filter_french: '💅 フレンチ',
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
        }
    };

    // ==================== MENU DATA ====================
    const menuData = {
        manicure: [
            { name: { vi: 'Sơn gel cơ bản', en: 'Basic Gel Polish', ja: 'ベーシックジェル' }, price: '150.000đ', priceUSD: '$6', time: '45 phút', desc: { vi: 'Sơn gel 1 màu, bền đẹp 3-4 tuần', en: 'Single color gel, lasts 3-4 weeks', ja: 'ワンカラージェル、3〜4週間持続' } },
            { name: { vi: 'Sơn gel cao cấp', en: 'Premium Gel Polish', ja: 'プレミアムジェル' }, price: '200.000đ', priceUSD: '$8', time: '60 phút', desc: { vi: 'Sơn gel cao cấp, bóng mượt lâu trôi', en: 'Premium gel, glossy long-lasting', ja: '高級ジェル、光沢長持ち' } },
            { name: { vi: 'Manicure cơ bản', en: 'Basic Manicure', ja: 'ベーシックマニキュア' }, price: '100.000đ', priceUSD: '$4', time: '30 phút', desc: { vi: 'Cắt da, dũa móng, dưỡng ẩm', en: 'Cuticle care, shaping, moisturizing', ja: 'キューティクルケア、整形、保湿' } },
            { name: { vi: 'Manicure VIP', en: 'VIP Manicure', ja: 'VIPマニキュア' }, price: '350.000đ', priceUSD: '$14', time: '90 phút', desc: { vi: 'Bao gồm massage tay, mask dưỡng da', en: 'Includes hand massage & skin mask', ja: 'ハンドマッサージ＆スキンマスク付き' } },
            { name: { vi: 'Tháo gel cũ', en: 'Gel Removal', ja: 'ジェルオフ' }, price: '50.000đ', priceUSD: '$2', time: '20 phút', desc: { vi: 'Tháo gel an toàn, không hại móng', en: 'Safe gel removal, nail-friendly', ja: '安全なジェルオフ' } },
        ],
        pedicure: [
            { name: { vi: 'Pedicure cơ bản', en: 'Basic Pedicure', ja: 'ベーシックペディキュア' }, price: '150.000đ', priceUSD: '$6', time: '45 phút', desc: { vi: 'Ngâm chân, cắt da, sơn đơn', en: 'Foot soak, cuticle care, polish', ja: 'フットバス、ケア、ポリッシュ' } },
            { name: { vi: 'Pedicure spa', en: 'Spa Pedicure', ja: 'スパペディキュア' }, price: '300.000đ', priceUSD: '$12', time: '75 phút', desc: { vi: 'Ngâm thảo dược, tẩy tế bào chết, massage', en: 'Herbal soak, scrub, massage', ja: 'ハーブソーク、スクラブ、マッサージ' } },
            { name: { vi: 'Sơn gel chân', en: 'Toe Gel Polish', ja: 'フットジェル' }, price: '180.000đ', priceUSD: '$7', time: '50 phút', desc: { vi: 'Sơn gel cho ngón chân, bền đẹp', en: 'Gel polish for toes, long-lasting', ja: 'フットジェルポリッシュ' } },
            { name: { vi: 'Pedicure VIP', en: 'VIP Pedicure', ja: 'VIPペディキュア' }, price: '450.000đ', priceUSD: '$18', time: '100 phút', desc: { vi: 'Trọn gói chăm sóc chân cao cấp', en: 'Full premium foot care package', ja: 'フルプレミアムフットケア' } },
        ],
        nailart: [
            { name: { vi: 'Vẽ hoa đơn giản', en: 'Simple Floral Art', ja: 'シンプルフラワーアート' }, price: '30.000đ/ngón', priceUSD: '$1.2/nail', time: '+10 phút', desc: { vi: 'Vẽ hoa, lá trang trí nhẹ nhàng', en: 'Delicate flower & leaf design', ja: '繊細な花と葉のデザイン' } },
            { name: { vi: 'Nail art trendy', en: 'Trendy Nail Art', ja: 'トレンドネイルアート' }, price: '50.000đ/ngón', priceUSD: '$2/nail', time: '+15 phút', desc: { vi: 'Mẫu hot trend: caro, marble, ombre...', en: 'Hot trends: check, marble, ombre...', ja: 'チェック、マーブル、オンブレ...' } },
            { name: { vi: 'Đính đá/charm', en: 'Crystal & Charms', ja: 'クリスタル＆チャーム' }, price: '20.000đ/viên', priceUSD: '$0.8/pc', time: '+5 phút', desc: { vi: 'Đá pha lê, charm 3D các loại', en: 'Crystal stones, 3D charms', ja: 'クリスタルストーン、3Dチャーム' } },
            { name: { vi: 'Vẽ tay nghệ thuật', en: 'Hand-painted Art', ja: 'ハンドペイントアート' }, price: '80.000đ/ngón', priceUSD: '$3.2/nail', time: '+20 phút', desc: { vi: 'Vẽ tay phức tạp, tùy chỉnh theo yêu cầu', en: 'Complex hand-painted, custom design', ja: '複雑なハンドペイント、カスタムデザイン' } },
            { name: { vi: 'Foil/Chrome/Cat eye', en: 'Foil/Chrome/Cat Eye', ja: 'フォイル/クローム/キャットアイ' }, price: '40.000đ/ngón', priceUSD: '$1.6/nail', time: '+10 phút', desc: { vi: 'Hiệu ứng gương, mắt mèo, foil vàng', en: 'Mirror, cat eye, gold foil effects', ja: 'ミラー、キャットアイ、ゴールドフォイル' } },
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
        'img/nail_elegant_pink_1772637269566.png',     // 0 - pink elegant
        'img/nail_glitter_gold_1772637287925.png',      // 1 - gold glitter
        'img/nail_french_floral_1772637308627.png',     // 2 - french floral
        'img/nail_ombre_sunset_1772637353592.png',      // 3 - ombre sunset
        'img/nail_marble_white_1772637371842.png',      // 4 - marble white
        'img/nail_geometric_nude_1772637393339.png',    // 5 - geometric nude
        'img/nail_red_classic_1772637413323.png',       // 6 - red classic
        'img/nail_pastel_rainbow_1772637434990.png',    // 7 - pastel rainbow
        'img/nail_butterfly_art_1772637465780.png',     // 8 - butterfly art
        'img/nail_chrome_silver_1772637481644.png',     // 9 - chrome silver
        'img/nail_cherry_blossom_1772637495298.png',    // 10 - cherry blossom
        'img/nail_dark_emerald_1772637518178.png',      // 11 - dark emerald
        'img/nail_nude_minimal_1772637531949.png',      // 12 - nude minimal
        'img/nail_lavender_dream_1772637550872.png',    // 13 - lavender dream
        'img/nail_leopard_print_1772637575421.png',     // 14 - leopard print
        'img/nail_galaxy_dark_1772637596153.png',       // 15 - galaxy dark
        'img/nail_candy_pink_1772637612732.png',        // 16 - candy pink
        // === NEW IMAGES ===
        'img/nail_double_line_french.png',              // 17 - double line french
        'img/nail_wavy_french.png',                     // 18 - wavy french
        'img/nail_deep_french.png',                     // 19 - deep french
        'img/nail_double_outline_french.png',           // 20 - double outline french
        'img/nail_french_red_deep.png',                 // 21 - french red deep
        'img/nail_french_glitter.png',                  // 22 - french glitter
        'img/nail_bow_ribbon.png',                      // 23 - bow ribbon
        'img/nail_cat_eye_nude.png',                    // 24 - cat eye nude
        'img/nail_heart_valentine.png',                 // 25 - heart valentine
        'img/nail_syrup_pink.png',                      // 26 - syrup pink
        'img/nail_aurora_borealis.png',                 // 27 - aurora borealis
        'img/nail_starry_holographic.png',              // 28 - starry holographic
        'img/nail_bridal_pearl.png',                    // 29 - bridal pearl
        'img/nail_sakura_art.png',                      // 30 - sakura art
        'img/nail_magnet_cat_eye.png',                  // 31 - magnet cat eye
        'img/nail_velvet_red.png',                      // 32 - velvet red
        'img/nail_glass_korean.png',                    // 33 - glass korean
        'img/nail_ocean_wave.png',                      // 34 - ocean wave
        'img/nail_neon_party.png',                      // 35 - neon party
        'img/nail_vintage_lace.png',                    // 36 - vintage lace
    ];

    // Map 100 designs → 37 images by matching style
    const allDesignImages = {
        1: localImages[0], 2: localImages[4], 3: localImages[5], 4: localImages[2], 5: localImages[16],
        6: localImages[9], 7: localImages[2], 8: localImages[15], 9: localImages[14], 10: localImages[16],
        11: localImages[15], 12: localImages[12], 13: localImages[10], 14: localImages[14], 15: localImages[3],
        16: localImages[0], 17: localImages[1], 18: localImages[5], 19: localImages[7], 20: localImages[11],
        21: localImages[4], 22: localImages[6], 23: localImages[7], 24: localImages[13], 25: localImages[15],
        26: localImages[1], 27: localImages[11], 28: localImages[12], 29: localImages[4], 30: localImages[8],
        31: localImages[9], 32: localImages[3], 33: localImages[15], 34: localImages[1], 35: localImages[5],
        36: localImages[6], 37: localImages[12], 38: localImages[3], 39: localImages[8], 40: localImages[0],
        41: localImages[1], 42: localImages[14], 43: localImages[12], 44: localImages[11], 45: localImages[13],
        46: localImages[0], 47: localImages[16], 48: localImages[6], 49: localImages[13], 50: localImages[3],
        // === NEW DESIGNS 51-100 ===
        51: localImages[17], 52: localImages[18], 53: localImages[21], 54: localImages[20], 55: localImages[22],
        56: localImages[19], 57: localImages[18], 58: localImages[17], 59: localImages[22], 60: localImages[20],
        61: localImages[23], 62: localImages[25], 63: localImages[23], 64: localImages[24], 65: localImages[31],
        66: localImages[24], 67: localImages[25], 68: localImages[25], 69: localImages[22], 70: localImages[28],
        71: localImages[26], 72: localImages[27], 73: localImages[26], 74: localImages[31], 75: localImages[33],
        76: localImages[30], 77: localImages[24], 78: localImages[26], 79: localImages[32], 80: localImages[30],
        81: localImages[10], 82: localImages[29], 83: localImages[35], 84: localImages[1], 85: localImages[34],
        86: localImages[12], 87: localImages[29], 88: localImages[9], 89: localImages[9], 90: localImages[35],
        91: localImages[17], 92: localImages[29], 93: localImages[34], 94: localImages[36], 95: localImages[32],
        96: localImages[9], 97: localImages[12], 98: localImages[10], 99: localImages[34], 100: localImages[29],
    };

    // ==================== GALLERY DATA (100 designs) ====================
    const galleryDesigns = [
        { id: 1, name: { vi: 'Ombre Hồng Pastel', en: 'Pastel Pink Ombre', ja: 'パステルピンクオンブレ' }, filter: 'trendy', tag: 'HOT' },
        { id: 2, name: { vi: 'Marble Trắng Vàng', en: 'White Gold Marble', ja: 'ホワイトゴールドマーブル' }, filter: 'elegant', tag: 'NEW' },
        { id: 3, name: { vi: 'Caro Nâu Sữa', en: 'Milk Brown Check', ja: 'ミルクブラウンチェック' }, filter: 'trendy', tag: 'HOT' },
        { id: 4, name: { vi: 'French Tip Hoa Nhí', en: 'Floral French Tip', ja: 'フレンチチップフラワー' }, filter: 'elegant', tag: '' },
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
        { id: 38, name: { vi: 'Ombre Coral Cam', en: 'Coral Ombre', ja: 'コーラルオンブレ' }, filter: 'trendy', tag: '' },
        { id: 39, name: { vi: 'Bướm Nghệ Thuật', en: 'Artistic Butterfly', ja: 'アーティスティックバタフライ' }, filter: 'bold', tag: 'NEW' },
        { id: 40, name: { vi: 'Baby Pink Gradient', en: 'Baby Pink Gradient', ja: 'ベビーピンクグラデ' }, filter: 'elegant', tag: 'HOT' },
        { id: 41, name: { vi: 'Đính Đá Lấp Lánh', en: 'Crystal Bling', ja: 'クリスタルブリング' }, filter: 'elegant', tag: 'VIP' },
        { id: 42, name: { vi: 'Da Báo Nâu Nhạt', en: 'Light Brown Leopard', ja: 'ライトブラウンレオパード' }, filter: 'trendy', tag: 'HOT' },
        { id: 43, name: { vi: 'Nude Ngôi Sao', en: 'Star Nude', ja: 'スターヌード' }, filter: 'minimalist', tag: '' },
        { id: 44, name: { vi: 'Xanh Rêu Vintage', en: 'Vintage Moss Green', ja: 'ヴィンテージモスグリーン' }, filter: 'trendy', tag: 'NEW' },
        { id: 45, name: { vi: 'Lavender Aurora', en: 'Aurora Lavender', ja: 'オーロララベンダー' }, filter: 'bold', tag: 'HOT' },
        { id: 46, name: { vi: 'Hồng Đào Peach', en: 'Peach Blossom', ja: 'ピーチブロッサム' }, filter: 'elegant', tag: '' },
        { id: 47, name: { vi: 'Candy Chấm Bi', en: 'Candy Polka Dots', ja: 'キャンディポルカドット' }, filter: 'cute', tag: '' },
        { id: 48, name: { vi: 'Đỏ Đậm Sang Trọng', en: 'Deep Red Luxe', ja: 'ディープレッドラグジュアリー' }, filter: 'elegant', tag: '' },
        { id: 49, name: { vi: 'Lavender Opal', en: 'Opal Lavender', ja: 'オパールラベンダー' }, filter: 'minimalist', tag: 'NEW' },
        { id: 50, name: { vi: 'Sunset Rực Rỡ', en: 'Blazing Sunset', ja: 'ブレイジングサンセット' }, filter: 'bold', tag: '' },
        // === FRENCH NAIL STYLES (51-60) ===
        { id: 51, name: { vi: 'Double Line French Trắng', en: 'White Double Line French', ja: 'ホワイトダブルラインフレンチ' }, filter: 'french', tag: 'HOT' },
        { id: 52, name: { vi: 'Wavy French Hồng', en: 'Pink Wavy French', ja: 'ピンクウェーブフレンチ' }, filter: 'french', tag: 'NEW' },
        { id: 53, name: { vi: 'Deep French Đỏ', en: 'Red Deep French', ja: 'レッドディープフレンチ' }, filter: 'french', tag: 'HOT' },
        { id: 54, name: { vi: 'Double Outline French Nude', en: 'Nude Double Outline French', ja: 'ヌードダブルアウトラインフレンチ' }, filter: 'french', tag: 'NEW' },
        { id: 55, name: { vi: 'French Glitter Vàng', en: 'Gold Glitter French', ja: 'ゴールドグリッターフレンチ' }, filter: 'french', tag: '' },
        { id: 56, name: { vi: 'Deep French Hồng Pastel', en: 'Pastel Pink Deep French', ja: 'パステルピンクディープフレンチ' }, filter: 'french', tag: '' },
        { id: 57, name: { vi: 'Wavy French Tím Lavender', en: 'Lavender Wavy French', ja: 'ラベンダーウェーブフレンチ' }, filter: 'french', tag: '' },
        { id: 58, name: { vi: 'Double Line French Đen', en: 'Black Double Line French', ja: 'ブラックダブルラインフレンチ' }, filter: 'french', tag: 'HOT' },
        { id: 59, name: { vi: 'French Ombre Cam', en: 'Orange Ombre French', ja: 'オレンジオンブレフレンチ' }, filter: 'french', tag: '' },
        { id: 60, name: { vi: 'Double Outline French Bạc', en: 'Silver Double Outline French', ja: 'シルバーダブルアウトラインフレンチ' }, filter: 'french', tag: 'NEW' },
        // === BOW / RIBBON / CAT EYE / HEART (61-70) ===
        { id: 61, name: { vi: 'Nơ Ribbon Trắng 3D', en: 'White 3D Ribbon Bow', ja: 'ホワイト3Dリボン' }, filter: 'cute', tag: 'HOT' },
        { id: 62, name: { vi: 'Bow Charm Đỏ Valentine', en: 'Red Valentine Bow Charm', ja: 'レッドバレンタインボウ' }, filter: 'cute', tag: '' },
        { id: 63, name: { vi: 'Ribbon Art Hồng Nhạt', en: 'Light Pink Ribbon Art', ja: 'ライトピンクリボンアート' }, filter: 'cute', tag: 'NEW' },
        { id: 64, name: { vi: 'Cat Eye Nude Sang', en: 'Elegant Nude Cat Eye', ja: 'エレガントヌードキャットアイ' }, filter: 'elegant', tag: 'HOT' },
        { id: 65, name: { vi: 'Cat Eye Đen Huyền Bí', en: 'Mysterious Black Cat Eye', ja: 'ミステリアスブラックキャットアイ' }, filter: 'bold', tag: '' },
        { id: 66, name: { vi: 'Cat Eye Rose Vàng', en: 'Rose Gold Cat Eye', ja: 'ローズゴールドキャットアイ' }, filter: 'elegant', tag: 'NEW' },
        { id: 67, name: { vi: 'Heart French Đỏ', en: 'Red Heart French', ja: 'レッドハートフレンチ' }, filter: 'trendy', tag: 'HOT' },
        { id: 68, name: { vi: 'Valentine Heart Hồng', en: 'Pink Valentine Heart', ja: 'ピンクバレンタインハート' }, filter: 'cute', tag: '' },
        { id: 69, name: { vi: 'Trái Tim Glitter', en: 'Glitter Heart Nails', ja: 'グリッターハートネイル' }, filter: 'trendy', tag: '' },
        { id: 70, name: { vi: 'Starry Holographic Bow', en: 'Holographic Starry Bow', ja: 'ホログラフィックスターリーボウ' }, filter: 'cute', tag: 'NEW' },
        // === KOREAN / JAPANESE TRENDS (71-80) ===
        { id: 71, name: { vi: 'Syrup Nails Hồng', en: 'Pink Syrup Nails', ja: 'ピンクシロップネイル' }, filter: 'trendy', tag: 'HOT' },
        { id: 72, name: { vi: 'Aurora Borealis Nail', en: 'Aurora Borealis Nail', ja: 'オーロラボレアリスネイル' }, filter: 'bold', tag: 'NEW' },
        { id: 73, name: { vi: 'Jelly Nails Trong Suốt', en: 'Clear Jelly Nails', ja: 'クリアジェリーネイル' }, filter: 'trendy', tag: '' },
        { id: 74, name: { vi: 'Magnet Cat Eye Xanh', en: 'Teal Magnet Cat Eye', ja: 'ティールマグネットキャットアイ' }, filter: 'bold', tag: 'HOT' },
        { id: 75, name: { vi: 'Korean Glass Nail', en: 'Korean Glass Nail', ja: 'コリアンガラスネイル' }, filter: 'minimalist', tag: 'NEW' },
        { id: 76, name: { vi: 'Japanese Sakura Art', en: 'Japanese Sakura Art', ja: '日本の桜アート' }, filter: 'elegant', tag: '' },
        { id: 77, name: { vi: 'Mắt Mèo Nâu Hổ Phách', en: 'Amber Cat Eye', ja: 'アンバーキャットアイ' }, filter: 'elegant', tag: 'HOT' },
        { id: 78, name: { vi: 'Aura Nails Pastel', en: 'Pastel Aura Nails', ja: 'パステルオーラネイル' }, filter: 'trendy', tag: 'NEW' },
        { id: 79, name: { vi: 'Velvet Nails Đỏ Rượu', en: 'Wine Red Velvet Nails', ja: 'ワインレッドベルベット' }, filter: 'bold', tag: '' },
        { id: 80, name: { vi: 'Blooming Gel Hoa Mận', en: 'Plum Bloom Gel Art', ja: 'プラムブルームジェル' }, filter: 'elegant', tag: '' },
        // === SEASONAL / SPECIAL (81-90) ===
        { id: 81, name: { vi: '8/3 Hoa Hồng Đặc Biệt', en: "Women's Day Rose Special", ja: '国際女性デーローズ' }, filter: 'cute', tag: 'HOT' },
        { id: 82, name: { vi: 'Bridal Pearl White', en: 'Bridal Pearl White', ja: 'ブライダルパールホワイト' }, filter: 'elegant', tag: 'VIP' },
        { id: 83, name: { vi: 'Holiday Glitter Rực Rỡ', en: 'Festive Holiday Glitter', ja: 'フェスティブホリデーグリッター' }, filter: 'bold', tag: '' },
        { id: 84, name: { vi: 'Tết Hoa Mai Vàng', en: 'Lunar New Year Apricot', ja: '旧正月黄梅' }, filter: 'trendy', tag: 'HOT' },
        { id: 85, name: { vi: 'Mùa Hè Tropical', en: 'Tropical Summer', ja: 'トロピカルサマー' }, filter: 'cute', tag: '' },
        { id: 86, name: { vi: 'Autumn Leaves Nâu', en: 'Brown Autumn Leaves', ja: 'ブラウンオータムリーフ' }, filter: 'minimalist', tag: 'NEW' },
        { id: 87, name: { vi: 'Winter Snowflake', en: 'Winter Snowflake', ja: 'ウィンタースノーフレーク' }, filter: 'elegant', tag: '' },
        { id: 88, name: { vi: 'Chrome Hồng Rose Gold', en: 'Rose Gold Chrome', ja: 'ローズゴールドクローム' }, filter: 'trendy', tag: 'HOT' },
        { id: 89, name: { vi: 'Moonlight Silver Glow', en: 'Moonlight Silver Glow', ja: 'ムーンライトシルバー' }, filter: 'minimalist', tag: '' },
        { id: 90, name: { vi: 'Neon Party Lights', en: 'Neon Party Lights', ja: 'ネオンパーティーライト' }, filter: 'bold', tag: 'NEW' },
        // === MIX STYLES (91-100) ===
        { id: 91, name: { vi: 'French Twist Đôi Màu', en: 'Two-Tone French Twist', ja: 'ツートーンフレンチツイスト' }, filter: 'french', tag: '' },
        { id: 92, name: { vi: 'Thiên Thần Angel Wings', en: 'Angel Wings Nails', ja: 'エンジェルウィングネイル' }, filter: 'cute', tag: '' },
        { id: 93, name: { vi: 'Ocean Wave Xanh', en: 'Ocean Blue Wave', ja: 'オーシャンブルーウェーブ' }, filter: 'bold', tag: '' },
        { id: 94, name: { vi: 'Vintage Lace Ren Trắng', en: 'White Vintage Lace', ja: 'ホワイトヴィンテージレース' }, filter: 'elegant', tag: 'NEW' },
        { id: 95, name: { vi: 'Coffin Shape Đen Matte', en: 'Matte Black Coffin', ja: 'マットブラックコフィン' }, filter: 'bold', tag: 'HOT' },
        { id: 96, name: { vi: 'Stiletto Chrome Bạc', en: 'Silver Chrome Stiletto', ja: 'シルバークロームスティレット' }, filter: 'bold', tag: '' },
        { id: 97, name: { vi: 'Nude Ánh Kim Nhẹ', en: 'Subtle Shimmer Nude', ja: 'サトルシマーヌード' }, filter: 'minimalist', tag: '' },
        { id: 98, name: { vi: 'Hoa Tulip Xuân', en: 'Spring Tulip Nails', ja: 'スプリングチューリップ' }, filter: 'cute', tag: 'NEW' },
        { id: 99, name: { vi: 'Gradient Biển Xanh', en: 'Blue Sea Gradient', ja: 'ブルーシーグラデーション' }, filter: 'trendy', tag: '' },
        { id: 100, name: { vi: 'Diamond Luxury VIP', en: 'Diamond Luxury VIP', ja: 'ダイヤモンドラグジュアリーVIP' }, filter: 'elegant', tag: 'VIP' },
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
        grid.innerHTML = items.map(item => `
            <div class="menu-item fade-in visible">
                <div class="menu-item-left">
                    <div class="menu-item-name">${item.name[currentLang] || item.name.vi}</div>
                    <div class="menu-item-desc">${item.desc[currentLang] || item.desc.vi}</div>
                    <span class="menu-item-duration">⏱ ${item.time}</span>
                </div>
                <div class="menu-item-price">
                    <span class="price-vnd">${item.price}</span>
                    <span class="price-usd">${item.priceUSD || ''}</span>
                </div>
            </div>
        `).join('');
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
        const showing = filtered.slice(0, galleryShowCount);
        const loadBtn = document.getElementById('loadMoreBtn');
        loadBtn.style.display = galleryShowCount >= filtered.length ? 'none' : 'block';

        grid.innerHTML = showing.map((d, i) => {
            const name = d.name[currentLang] || d.name.vi;
            const imgSrc = getDesignImage(d.id);
            return `
                <div class="gallery-item fade-in visible" data-index="${i}" style="animation-delay:${i * 0.05}s">
                    <img src="${imgSrc}" alt="${name}" loading="lazy">
                    ${d.tag ? `<span class="gallery-item-tag">${d.tag}</span>` : ''}
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
