param(
  [string]$SourceRoot = (Join-Path $PSScriptRoot ".."),
  [string]$OutputRoot = (Join-Path $PSScriptRoot "..\public\resources")
)

$ErrorActionPreference = "Stop"
$exclude = "\\(node_modules|dist|\.git|public\\resources)\\"
$files = Get-ChildItem -Path $SourceRoot -Recurse -File -Filter *.pptx | Where-Object { $_.FullName -notmatch $exclude }
if (-not $files) { Write-Host "No PPTX files found outside generated folders."; exit 0 }
$powerPoint = $null
try { $powerPoint = New-Object -ComObject PowerPoint.Application } catch { throw "Microsoft PowerPoint is required for conversion. Install it or export source presentations to PDF manually." }
try {
  foreach ($file in $files) {
    $relative = $file.FullName.Substring($SourceRoot.Length).TrimStart('\','/')
    $target = Join-Path $OutputRoot ([IO.Path]::ChangeExtension($relative, ".pdf"))
    New-Item -ItemType Directory -Force -Path (Split-Path $target) | Out-Null
    if (Test-Path $target) { Write-Host "Exists: $target"; continue }
    Write-Host "Converting: $relative"
    $presentation = $powerPoint.Presentations.Open($file.FullName, $false, $true, $false)
    $presentation.SaveAs($target, 32)
    $presentation.Close()
  }
} finally { if ($powerPoint) { $powerPoint.Quit(); [Runtime.InteropServices.Marshal]::ReleaseComObject($powerPoint) | Out-Null } }
