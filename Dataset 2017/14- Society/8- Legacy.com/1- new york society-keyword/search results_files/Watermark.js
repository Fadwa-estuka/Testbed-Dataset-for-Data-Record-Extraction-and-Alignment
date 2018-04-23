function Watermark_Focus(control, cssClass)
{
	if (control && (control.value == get_Watermark(control)))
	{
		control.value = "";
		control.className = cssClass;
		control.click();
		control.select();
	}
}

function Watermark_Blur(control, cssClass)
{
	if (control && (control.value == ""))
	{
		var watermark = get_Watermark(control);

		if (watermark != "")
		{
			control.className = cssClass;
			control.value = watermark;
		}
	}
}

function get_Watermark(control)
{
	var watermark = control.getAttribute("watermark");
	return watermark ? watermark : "";
}