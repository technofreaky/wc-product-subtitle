<?php

namespace WC_Product_Subtitle\Admin;

defined( 'ABSPATH' ) || exit;

use VSP\Base;

if ( ! class_exists( '\WC_Product_Subtitle\Admin\Admin' ) ) {
	/**
	 * Class Admin
	 *
	 * @package WC_Product_Subtitle\Admin
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Admin extends Base {
		/**
		 * On Class Init.
		 */
		public function __construct() {
			$this->_instance( '\WC_Product_Subtitle\Admin\Product\Field' );
			$this->_instance( '\WC_Product_Subtitle\Admin\Product\Render' );

			wponion_plugin_links( $this->plugin()->file() )
				->action_link_before( 'settings', __( '⚙️ Settings' ), admin_url( 'admin.php?page=product-subtitle' ) )
				->action_link_after( 'sysinfo', __( 'ℹ️ System Info' ), admin_url( 'admin.php?page=product-subtitle&container-id=system-info' ) )
				->row_link( __( '📚 F.A.Q' ), 'https://wordpress.org/plugins/wc-product-subtitle/faq' )
				->row_link( __( '📦 View On Github' ), 'https://github.com/varunsridharan/wc-product-subtitle' )
				->row_link( __( '📝 Report An Issue' ), 'https://github.com/varunsridharan/wc-product-subtitle/issues' )
				->row_link( __( '💁🏻 Donate', 'wc-product-subtitle' ), 'https://paypal.me/varunsridharan' );
		}
	}
}
